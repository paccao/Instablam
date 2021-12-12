import { useContext } from "react"
import { IoMdPower } from "react-icons/io"
import { cameraOff, cameraOn, Button } from "../../components/Media/mediaUtils"
import { MediaContext } from "../../contexts/MediaContext"

export default function CameraOnToggleBtn() {
	const {
		videoStream,
		setVideoStream,
		cameraIsOn,
		setCameraIsOn,
		setStatusMessage,
		videoRef,
		statusMessageContainerRef
	} = useContext(MediaContext)

	const handleCameraToggle = () => {
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
