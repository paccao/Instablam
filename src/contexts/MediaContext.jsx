import { createContext, useState } from "react"

export const MediaContext = createContext()

export default function MediaProvider(props) {
	const [videoStream, setVideoStream] = useState(null)
	const [galleryPictures, setGalleryPictures] = useState([
		{
			alt: "Picture of a cow",
			url: "cow-wolfgang-hasselmann-unsplash.jpg",
			location: "Cow-land",
			takenAt: "Cow-time",
		},
		{
			alt: "Picture of an ostritch",
			url: "ostritch-ricardo-iv-tamayo-unsplash.jpg",
			location: "Ostritch-land",
			takenAt: "Ostritch-time",
		},
	])

	return (
		<MediaContext.Provider
			value={{
				videoStream,
				setVideoStream,
				galleryPictures,
				setGalleryPictures,
			}}
		>
			{props.children}
		</MediaContext.Provider>
	)
}
