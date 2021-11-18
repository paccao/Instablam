import { useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"

export default function Gallery() {
	const { galleryPictures } = useContext(MediaContext)
	return (
		<div>
			<h2>Gallery</h2>
			{galleryPictures &&
				galleryPictures.map((obj, index) => {
					return (
						<div key={index}>
							<img src={obj.url} alt={obj.alt} />
							<figcaption>{
								/**Location icon */ `${obj.location}, ${obj.takenAt}`
							}</figcaption>
						</div>
					)
				})}
		</div>
	)
}
