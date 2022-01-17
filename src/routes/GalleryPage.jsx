import Gallery from "../components/Media/Gallery"
import GalleryHeader from "../components/Media/GalleryHeader"
import { useState } from "react"
import styled from "styled-components"

export default function GalleryPage() {
	const [galleryFullscreen, setGalleryFullscreen] = useState(true)
	return (
		<RootContainer>
			<div className="container">
				<GalleryHeader
					galleryFullscreen={galleryFullscreen}
					setGalleryFullscreen={setGalleryFullscreen}
				/>
				{galleryFullscreen ? <Gallery /> : null}
			</div>
		</RootContainer>
	)
}

const RootContainer = styled.div`
	background-color: #333;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	.container {
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
`
