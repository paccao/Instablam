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
						<div key={`${obj.id}${index}`}>
							<Image src={obj.url} alt={obj.alt} />
							<figcaption>{`${obj.location}, ${obj.takenAt}`}</figcaption>
							<a href={obj.url} download>
								<MdDownload />
								<p>Download</p>
							</a>
							<Button
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
						</div>
					)
				})}
		</div>
	)
}

const Image = styled.img`
	height: auto;
	width: 150px;
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
