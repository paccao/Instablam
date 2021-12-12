import { useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import { deletePhoto, Button } from "./mediaUtils"
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
							<Figc aria-label="Photo location and date information">{`${obj.location}, ${obj.takenAt}`}</Figc>
							<BottomLinks>
								<a
									aria-label="Download selected photo"
									href={obj.url}
									download
								>
									<MiniContainer>
										<MdDownload />
										<p>Download</p>
									</MiniContainer>
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
									<MiniContainer>
										<BsTrash />
										<p>Delete</p>
									</MiniContainer>
								</Button>
							</BottomLinks>
						</Card>
					)
				})}
		</div>
	)
}

const BottomLinks = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`
const Figc = styled.figcaption`
	color: #fff;
	text-align: center;
`
const MiniContainer = styled.div`
	margin: 0.5em 0em;
	display: flex;
	align-items: center;
`

const Card = styled.div`
	border-bottom: 1px solid #222;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	margin-bottom: 0.5rem;

	a {
		color: #dd88dd;
	}

	button {
		color: #f50a1d;
	}
`

const Image = styled.img`
	height: auto;
	width: 100%;
`
