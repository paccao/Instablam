export function cameraOff(videoElement, whenDone) {
	videoElement.srcObject = null
	whenDone()
}

export async function cameraOn(context, videoElement, showMessage, whenDone) {
	const constraints = {
		video: { facingMode: "user", width: 300, height: 200 },
		audio: false,
	}
	try {
		const stream = await navigator.mediaDevices.getUserMedia(constraints)
		context.setVideoStream(stream)
		videoElement.srcObject = context.videoStream
		videoElement.addEventListener("loadedmetadata", () => {
			videoElement.play()
			whenDone()
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
