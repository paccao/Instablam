import { createContext, useState } from "react"

export const MediaContext = createContext()

export default function MediaProvider() {
	const [videoStream, setVideoStream] = useState(null)

	return (
		<MediaContext.Provider value={{ videoStream, setVideoStream }}>
			{props.children}
		</MediaContext.Provider>
	)
}
