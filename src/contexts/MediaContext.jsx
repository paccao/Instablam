import { createContext, useState } from "react"

export const mediaContext = createContext()

export default function MediaProvider() {
	const [videoStream, setVideoStream] = useState(null)

	return (
		<MediaProvider.Provider value={{ videoStream, setVideoStream }}>
			{props.children}
		</MediaProvider.Provider>
	)
}
