import { useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import styled from "styled-components"
import { MdDownload } from "react-icons/md"

export default function Gallery() {
	const { galleryPictures } = useContext(MediaContext)
	return (
		<div>
			{galleryPictures &&
				galleryPictures.map((obj, index) => {
					return (
						<div key={index}>
							<Image src={obj.url} alt={obj.alt} />
							<figcaption>{`${obj.location}, ${obj.takenAt}`}</figcaption>
							<a href={obj.url} download>
								<MdDownload />
								<p>Download</p>
							</a>
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
