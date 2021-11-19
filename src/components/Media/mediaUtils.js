export function cameraOff(videoElement, whenDone) {
	videoElement.srcObject = null
	whenDone()
}

export async function cameraOn(context, videoElement, showMessage, whenDone) {
	const constraints = {
		video: { facingMode: "user", width: 300, height: 200 },
		audio: true,
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
	setGalleryPictures,
) {
	const imageCapture = new ImageCapture(videoStream.getVideoTracks()[0])

	const blob = await imageCapture.takePhoto()
	const picture = await URL.createObjectURL(blob)
	const newPictureObj = {
		alt: "Image taken with Instablam",
		url: picture,
		location: getImgLocation() || "Location unknown.",
		takenAt: getImgTakenAt() || "Time unknown",
	}

	setLastImageTaken(picture)
	pushToStateArray(newPictureObj, galleryPictures, setGalleryPictures)
}

export function handleImgError(event) {
	event.currentTarget.src = "http://placekitten.com/100/100"
	event.currentTarget.alt = "A picture of a kitten."
}
