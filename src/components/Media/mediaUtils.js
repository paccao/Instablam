import { useContext } from "react"
import mediaContext from "../../contexts/mediaContext"

export function cameraOff(videoElement, whenDone) {
	videoElement.srcObject = null
	whenDone()
}

export async function cameraOn(videoElement, showMessage, whenDone) {
	const { videoStream, setVideoStream } = useContext(mediaContext)
	const constraints = {
		video: { facingMode: "user", width: 300, height: 200 },
		audio: true,
	}
	try {
		const stream = await navigator.mediaDevices.getUserMedia(constraints)
		setVideoStream(stream)
		videoElement.srcObject = videoStream
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

export async function takePicture() {
	const { videoStream } = useContext(mediaContext)
	const imageCapture = new ImageCapture(videoStream.getVideoTracks()[0])

	const blob = await imageCapture.takePhoto()
	const picture = await URL.createObjectURL(blob)
	// TODO: save pictured taken to a state variable
}
