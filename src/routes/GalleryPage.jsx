import Gallery from "../components/Media/Gallery"
import GalleryHeader from "../components/Media/GalleryHeader"
import { useState } from "react"
import styled from "styled-components"

export default function GalleryPage() {
	const [galleryFullscreen, setGalleryFullscreen] = useState(true)
	return (
		<Container>
			<GalleryHeader
				galleryFullscreen={galleryFullscreen}
				setGalleryFullscreen={setGalleryFullscreen}
			/>
			{galleryFullscreen ? <Gallery /> : null}
		</Container>
	)
}

const Container = styled.div`
	background-color: #333;
	position: relative;
	height: 100vh;
	width: 100vw;
`
