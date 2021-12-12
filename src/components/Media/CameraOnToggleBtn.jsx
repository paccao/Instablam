import { useContext } from "react"
import { IoMdPower } from "react-icons/io"
import {
	cameraOff,
	cameraOn,
	cameraCanvasOn,
	Button,
} from "../../components/Media/mediaUtils"
import { MediaContext } from "../../contexts/MediaContext"

export default function CameraOnToggleBtn() {
	const {
		videoStream,
		setVideoStream,
		cameraIsOn,
		setCameraIsOn,
		setStatusMessage,
		videoRef,
		canvasRef,
		statusMessageContainerRef,
	} = useContext(MediaContext)

	const handleCameraToggle = () => {
		// Check browser support
		if ("ImageCapture" in window) {
			if (cameraIsOn) {
				cameraOff(videoRef.current, videoStream, setVideoStream)
				setCameraIsOn(false)
			} else {
				cameraOn(
					{ videoStream, setVideoStream },
					videoRef.current,
					setStatusMessage,
					setCameraIsOn,
					statusMessageContainerRef,
				)
			}
		} else {
			// Firefox implementation
			if (cameraIsOn) {
				// cameraOff()
				setCameraIsOn(false)
			} else {
				cameraCanvasOn(
					canvasRef.current,
					videoRef.current,
					videoStream,
					setVideoStream,
					statusMessageContainerRef,
					setStatusMessage,
					setCameraIsOn,
				)
			}
		}
	}

	return (
		<Button aria-label="Toggle camera on button" onClick={handleCameraToggle}>
			{cameraIsOn ? (
				<IoMdPower className="powerOn" />
			) : (
				<IoMdPower className="powerOff" />
			)}
		</Button>
	)
}
