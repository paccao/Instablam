import { useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import { handleImgError, takePicture } from "./mediaUtils"

import styled from "styled-components"
import { GiRapidshareArrow, GiCircle } from "react-icons/gi"

export default function CameraButtonsField() {
	const { videoStream, lastImageTaken, setLastImageTaken, pushToStateArray } =
		useContext(MediaContext)

	return (
		<ButtonsContainer>
			<MarginContainer>
				<Button>
					<DefaultButton>
						<GiRapidshareArrow/>
					</DefaultButton>
				</Button>
				<Button
					onClick={() =>
						takePicture(
							videoStream,
							setLastImageTaken,
							pushToStateArray,
							setGalleryPictures,
						)
					}
				>
					<GiCircle />
				</Button>
				<Button>
					<DefaultButton>
						{lastImageTaken && (
							<PreviewImage
								src={lastImageTaken}
								alt="A preview of the last image taken in the gallery."
								onError={handleImgError}
							/>
						)}
					</DefaultButton>
				</Button>
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
	align-items: baseline;
	margin: 0em 1.2em;
`

const Button = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`

const DefaultButton = styled.div`
	background-color: #222;
	color:#fff;
	width: 35px;
	height: 35px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const PreviewImage = styled.img`
	max-width: auto;
	height: 100%;
`
