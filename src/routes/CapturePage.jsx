import Camera from "../components/Media/Camera"
import CameraButtonsField from "../components/Media/CameraButtonsField"
import styled from "styled-components"
import Gallery from "../components/Media/Gallery"

export default function CapturePage() {
	return (
		<Container>
			<Header>Instablam</Header>
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

const Header = styled.h1`
	margin-top: 0px;
	position: absolute;
	top: 0;
	width: 100%;
	text-align: center;
	color: darkorange;
	font-size: 1.7em;
`
