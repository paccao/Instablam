import { useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import { deletePhoto, Button } from "./mediaUtils"
import styled from "styled-components"
import { MdDownload } from "react-icons/md"
import { BsTrash } from "react-icons/bs"

export default function Gallery() {
	const { galleryPictures, setGalleryPictures } = useContext(MediaContext)

	return (
		<RootContainer>
			{galleryPictures &&
				galleryPictures.map((obj, index) => {
					return (
						<Card key={`${obj.id}${index}`}>
							<div className="imageBox">
								<Image src={obj.url} alt={obj.alt} />
							</div>
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
		</RootContainer>
	)
}

const RootContainer = styled.div`
	width: 100%;
`

const BottomLinks = styled.div`
	width: 100%;
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
	width: 100%;
	border-bottom: 1px solid #222;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	margin-bottom: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	.imageBox {
		position: relative;
		max-width: 100%;
		max-height: auto;
		width: 700px;
		height: auto;
	}

	a {
		color: #dd88dd;
	}

	button {
		color: #f50a1d;
	}
`

const Image = styled.img`
	/* max-width: 100%;
	max-height: auto; */
	/* position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0; */
	width: 100%;
	height: 100%;
	object-fit: contain;
	/* object-position: center; */
`
