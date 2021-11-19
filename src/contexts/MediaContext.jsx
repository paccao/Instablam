import { createContext, useState, useEffect } from "react"

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
	const [lastImageTaken, setLastImageTaken] = useState(null)

	useEffect(() => {
		if (galleryPictures) setLastImageTaken(galleryPictures[length].url)
	}, [])

	/**
	 * Used to push a new object into a state array.
	 * @param {{}} newObj New data to be passed to the specified array.
	 * @param {[]} specifiedArr the read property of a specified state array
	 * @param {function} setSpecifiedArr the write property of a specified state array
	 */
	function pushToStateArray(newObj, specifiedArr, setSpecifiedArr) {
		const stateOfArr = specifiedArr
		const updatedArr = stateOfArr.push(newObj)
		setSpecifiedArr(updatedArr)
	}

	return (
		<MediaContext.Provider
			value={{
				videoStream,
				setVideoStream,
				galleryPictures,
				setGalleryPictures,
				lastImageTaken,
				setLastImageTaken,
				pushToStateArray,
			}}
		>
			{props.children}
		</MediaContext.Provider>
	)
}
