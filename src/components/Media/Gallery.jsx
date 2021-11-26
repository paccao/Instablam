import { useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import { deletePhoto } from "./mediaUtils"
import styled from "styled-components"
import { MdDownload } from "react-icons/md"
import { BsTrash } from "react-icons/bs"

export default function Gallery() {
	const { galleryPictures, setGalleryPictures } = useContext(MediaContext)

	return (
		<div>
			{galleryPictures &&
				galleryPictures.map((obj, index) => {
					return (
						<Card key={`${obj.id}${index}`}>
							<Image
								src={obj.url}
								alt={obj.alt}
								width="500"
								height="500"
							/>
							<figcaption aria-label="Photo location and date information">{`${obj.location}, ${obj.takenAt}`}</figcaption>
							<a
								aria-label="Download selected photo"
								href={obj.url}
								download
							>
								<MdDownload />
								<p>Download</p>
							</a>
							<Button
								aria-label="Delete selected photo"
								onClick={() =>
									deletePhoto(
										galleryPictures,
										setGalleryPictures,
										obj.id,
									)
								}
							>
								<BsTrash />
								<p>Delete</p>
							</Button>
						</Card>
					)
				})}
		</div>
	)
}

const Card = styled.div`
	border-bottom: 1px solid #222;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	margin-bottom: 0.5rem;
`

const Image = styled.img`
	height: auto;
	width: 100%;
`

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
