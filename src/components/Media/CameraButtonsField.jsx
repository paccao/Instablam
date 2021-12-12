import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { GiCircle } from "react-icons/gi"

import { MediaContext } from "../../contexts/MediaContext"
import { handleImgError, takePicture, Button } from "./mediaUtils"
import CameraOnToggleBtn from "./CameraOnToggleBtn"

export default function CameraButtonsField() {
	const {
		videoStream,
		lastImageTaken,
		setLastImageTaken,
		pushToStateArray,
		galleryPictures,
		setGalleryPictures,
		setStatusMessage,
		setCameraIsOn,
		statusMessageContainerRef,
	} = useContext(MediaContext)

	useEffect(() => {
		if (galleryPictures) {
			try {
				setLastImageTaken(galleryPictures.at(-1).url)
			} catch (error) {
				console.log(
					"Couldn't update the preview image of the last picture taken.",
				)
			}
		}
		setCameraIsOn(false)
	}, [])

	function takePic() {
		if (!videoStream) return
		else
			takePicture(
				videoStream,
				setLastImageTaken,
				pushToStateArray,
				galleryPictures,
				setGalleryPictures,
				setStatusMessage,
				statusMessageContainerRef,
			)
	}

	return (
		<ButtonsContainer>
			<MarginContainer>
				<DefaultButton>
					<CameraOnToggleBtn />
				</DefaultButton>
				<Button aria-label="Take photo button" onClick={takePic}>
					<TakePicButton>
						<GiCircle />
					</TakePicButton>
				</Button>
				<Link aria-label="Open gallery" to="/gallery">
					<DefaultButton>
						{lastImageTaken && galleryPictures ? (
							<PreviewImage
								src={lastImageTaken}
								alt="A preview of the last image taken in the gallery."
								onError={handleImgError}
							/>
						) : null}
					</DefaultButton>
				</Link>
			</MarginContainer>
		</ButtonsContainer>
	)
}

const ButtonsContainer = styled.section`
	position: absolute;
	bottom: 0;
	width: 100%;
`

const MarginContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0em 1.2em 0.5em 1.2em;
`

const DefaultButton = styled.div`
	background-color: #222;
	color: #8b8;
	width: 40px;
	height: 40px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const TakePicButton = styled.div`
	background-color: #222;
	border-radius: 50%;
	color: #fff;
	width: 58px;
	height: 58px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const PreviewImage = styled.img`
	max-width: auto;
	height: 100%;
`
