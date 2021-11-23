export function cameraOff(videoElement, videoStream, setVideoStream) {
	videoElement.srcObject = null
	let tracks = videoStream.getTracks()
	tracks.forEach((track) => track.stop())
	setVideoStream(null)
}

export async function cameraOn(
	context,
	videoElement,
	showMessage,
	optionalConstraints = {},
) {
	let constraints
	// Checks if the camera should use default constraints or optional ones
	if (!Object.keys(optionalConstraints).length) {
		constraints = {
			video: { facingMode: "user", width: 300, height: 200 },
			audio: false,
		}
	} else {
		constraints = optionalConstraints
	}

	try {
		const stream = await navigator.mediaDevices.getUserMedia(constraints)
		context.setVideoStream(stream)
		videoElement.srcObject = stream
		videoElement.addEventListener("loadedmetadata", () => {
			videoElement.play()
		})
	} catch (error) {
		console.log("Error message: ", error.message)
		showMessage(
			"Sorry, could not use your camera. Did you give me permission in your browser? Check that you are not already using your camera in another app.",
		)
	}
}

export async function takePicture(
	videoStream,
	setLastImageTaken,
	pushToStateArray,
	galleryPictures,
	setGalleryPictures,
) {
	const imageCapture = new ImageCapture(videoStream.getVideoTracks()[0])

	const blob = await imageCapture.takePhoto()
	const picture = await URL.createObjectURL(blob)

	const datetime = getImgTakenAt()
	let takenAt
	if (datetime.time && datetime.date) {
		takenAt = datetime.date + ", " + datetime.time
	} else takenAt = "Time unknown"

	const newPictureObj = {
		alt: "Image taken with Instablam",
		url: picture,
		location: (await getLocation()) || "Location unknown",
		takenAt,
	}

	setLastImageTaken(picture)
	pushToStateArray(newPictureObj, galleryPictures, setGalleryPictures)
}

export function handleImgError(event) {
	event.currentTarget.src = "http://placekitten.com/100/100"
	event.currentTarget.alt = "A picture of a kitten."
}

async function getLocation() {
	let location
	// TODO: Set a state variable that switches an icon in the gallery,
	// where the location text is written out
	try {
		location = await getImgLocation()
	} catch (error) {
		console.log("No location")
	}
	return location
}

function getImgLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const coordinates = `${position.coords.latitude}, ${position.coords.longitude}`

				resolve(coordinates)
			},
			(error) => reject(error),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
		)
	})
}

function getImgTakenAt() {
	const currentdate = new Date()
	const date =
		currentdate.getFullYear() +
		"/" +
		(currentdate.getMonth() + 1) +
		"/" +
		currentdate.getDate()

	const time =
		currentdate.getHours() +
		":" +
		currentdate.getMinutes() +
		":" +
		currentdate.getSeconds()
	return { date, time }
}
