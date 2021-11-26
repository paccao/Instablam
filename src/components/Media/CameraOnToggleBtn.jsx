import { useContext } from "react"
import styled from "styled-components"
import { IoMdPower } from "react-icons/io"
import { cameraOff, cameraOn } from "../../components/Media/mediaUtils"
import { MediaContext } from "../../contexts/MediaContext"

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
		<Button aria-label="Toggle camera on button" onClick={handleCameraToggle}>
			{cameraIsOn ? (
				<IoMdPower className="powerOn" />
			) : (
				<IoMdPower className="powerOff" />
			)}
		</Button>
	)
}

const Button = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	height: max-content;
`
