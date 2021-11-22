import Gallery from "../components/Media/Gallery"
import GalleryHeader from "../components/Media/GalleryHeader"
import { useState } from "react"
import styled from "styled-components"

export default function GalleryPage() {
	const [galleryFullscreen, setGalleryFullscreen] = useState(true)
	return (
		<Container>
			<GalleryHeader />
			<Gallery />
		</Container>
	)
}

const Container = styled.div`
	background-color: #fbfbfb;
	position: relative;
	height: 100vh;
	width: 100vw;
`
