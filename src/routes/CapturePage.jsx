import styled from "styled-components"
import Camera from "../components/Media/Camera"
import CameraButtonsField from "../components/Media/CameraButtonsField"

export default function CapturePage() {
	return (
		<Container>
			<Header>
				<h1>Instablam</h1>
			</Header>
			<Camera />
			<CameraButtonsField />
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
	h1 {
		width: 100%;
		margin-top: 0px;
		position: absolute;
		top: 0;
		text-align: center;
		color: #8d8;
		font-size: 1.7em;
	}
`
