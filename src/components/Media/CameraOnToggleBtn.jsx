import { useContext } from "react"
import { cameraOff, cameraOn } from "../../components/Media/mediaUtils"
import { MediaContext } from "../../contexts/MediaContext"
import { IoMdPower } from "react-icons/io"

export default function CameraOnToggleBtn() {
	const {
		videoStream,
		setVideoStream,
		cameraIsOn,
		setCameraIsOn,
		setStatusMessage,
		videoRef,
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
			)
			setCameraIsOn(true)
		}
	}

	return (
		<div onClick={handleCameraToggle}>
			{cameraIsOn ? (
				<IoMdPower className="powerOn" />
			) : (
				<IoMdPower className="powerOff" />
			)}
		</div>
	)
}
