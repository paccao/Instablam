import { nanoid } from "nanoid"

export function cameraOff(videoElement, videoStream, setVideoStream) {
	videoElement.srcObject = null
	let tracks = videoStream.getTracks()
	tracks.forEach((track) => track.stop())
	setVideoStream(null)
}

export async function cameraOn(
	context,
	videoElement,
	setStatusMessage,
	setCameraIsOn,
	statusMessageContainerRef,
	optionalConstraints = {},
) {
	let constraints
	// Checks if the camera should use default constraints or optional ones
	if (!Object.keys(optionalConstraints).length) {
		constraints = {
			video: { facingMode: "user", width: 500, height: 500 },
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
			setCameraIsOn(true)
		})
	} catch (error) {
		setStatusMessage(
			"Sorry, could not use your camera. Did you give me permission in your browser? Check that you are not already using your camera in another app.",
		)
		statusMessageContainerRef.current.style.display = "block"
		setCameraIsOn(false)
	}
}

export async function takePicture(
	videoStream,
	setLastImageTaken,
	pushToStateArray,
	galleryPictures,
	setGalleryPictures,
	setStatusMessage,
	statusMessageContainerRef
) {
	try {
		const imageCapture = new ImageCapture(videoStream.getVideoTracks()[0])
		const blob = await imageCapture.takePhoto()
		const picture = URL.createObjectURL(blob)

		const datetime = getImgTakenAt()
		let takenAt
		if (datetime.time && datetime.date) {
			takenAt = datetime.date + ", " + datetime.time
		} else takenAt = "Time unknown"

		const newPictureObj = {
			id: nanoid(),
			alt: "Image taken with Instablam",
			url: picture,
			location: (await getLocation(setStatusMessage, statusMessageContainerRef)) || "Location unknown",
			takenAt,
		}
		setLastImageTaken(picture)
		pushToStateArray(newPictureObj, galleryPictures, setGalleryPictures)
	} catch (error) {
		setStatusMessage(`Error occured! '${error.message}'.`)
		statusMessageContainerRef.current.style.display = "block"
	}
}

export function deletePhoto(gallery, setGalleryPictures, id) {
	const newPhotosArr = gallery.filter((picture) => picture.id !== id)
	setGalleryPictures(()=>[...newPhotosArr])
}

export function handleImgError(event) {
	event.currentTarget.src = "http://placekitten.com/100/100"
	event.currentTarget.alt = "A picture of a kitten."
}

async function getLocation(setStatusMessage, statusMessageContainerRef) {
	let location
	// TODO: Set a state variable that switches an icon in the gallery,
	// where the location text is written out
	try {
		location = await getImgLocation()
	} catch (error) {
		setStatusMessage("No location")
		statusMessageContainerRef.current.style.display = "block"
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
