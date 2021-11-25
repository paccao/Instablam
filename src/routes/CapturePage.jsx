import Camera from "../components/Media/Camera"
import CameraButtonsField from "../components/Media/CameraButtonsField"
import styled from "styled-components"
import Gallery from "../components/Media/Gallery"

import { useContext } from "react"
import { cameraOff, cameraOn } from "../components/Media/mediaUtils"
import { MediaContext } from "../contexts/MediaContext"

export default function CapturePage() {
	const {
		videoStream,
		setVideoStream,
		cameraIsOn,
		setCameraIsOn,
		setStatusMessage,
		videoRef,
		canUseMD,
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
		<Container>
			<Header>
				<h1>Instablam</h1>
				{canUseMD ? (
					<button onClick={handleCameraToggle}>
						{cameraIsOn ? "Turn camera off" : "Turn camera on"}
					</button>
				) : (
					<p>No support for a camera on this device found.</p>
				)}
			</Header>
			<Camera />
			<CameraButtonsField />
			<Gallery />
		</Container>
	)
}

const Container = styled.div`
	background-color: #333;
	position: relative;
	height: 100vh;
	width: 100vw;
`

const Header = styled.header`
	margin-top: 0px;
	position: absolute;
	top: 0;
	width: 100%;
	text-align: center;
	color: darkorange;
	font-size: 1.7em;
	z-index: 10;
`
