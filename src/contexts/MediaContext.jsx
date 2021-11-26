import { createContext, useState, useEffect, useRef } from "react"
import { nanoid } from "nanoid"

export const MediaContext = createContext()

export default function MediaProvider(props) {
	const [videoStream, setVideoStream] = useState(null)
	const [galleryPictures, setGalleryPictures] = useState([
		{
			id: nanoid(),
			alt: "Picture of a cow",
			url: "/images/cow-wolfgang-hasselmann-unsplash.jpg",
			location: "Cow-land",
			takenAt: "Cow-time",
		},
		{
			id: nanoid(),
			alt: "Picture of an ostritch",
			url: "/images/ostritch-ricardo-iv-tamayo-unsplash.jpg",
			location: "Ostritch-land",
			takenAt: "Ostritch-time",
		},
	])
	const [lastImageTaken, setLastImageTaken] = useState(null)
	const [camFacingDir, setCamFacingDir] = useState("user")
	const [cameraIsOn, setCameraIsOn] = useState(false)
	const [statusMessage, setStatusMessage] = useState("")
	const videoRef = useRef(null)
	const [canUseMD, setCanUseMD] = useState(false)

	useEffect(() => {
		if (galleryPictures) setLastImageTaken(galleryPictures[length].url)
	}, [])

	useEffect(() => {
		//TODO: load local storage for persistance
	}, [])

	/**
	 * Used to push a new object into a state array.
	 * @param {{}} newObj New data to be passed to the specified array.
	 * @param {[]} specifiedArr the read property of a specified state array
	 * @param {function} setSpecifiedArr the write property of a specified state array
	 */
	function pushToStateArray(newObj, specifiedArr, setSpecifiedArr) {
		setSpecifiedArr([...specifiedArr, newObj])
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
				camFacingDir,
				setCamFacingDir,
				cameraIsOn,
				setCameraIsOn,
				statusMessage,
				setStatusMessage,
				videoRef,
				canUseMD,
				setCanUseMD,
			}}
		>
			{props.children}
		</MediaContext.Provider>
	)
}
