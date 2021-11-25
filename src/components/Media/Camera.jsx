import { useEffect, useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import "./Media.css"

export default function Camera() {
	const { statusMessage, videoRef, canUseMD, setCanUseMD } =
		useContext(MediaContext)

	useEffect(() => {
		setCanUseMD("mediaDevices" in navigator)
	}, [])

	return (
		<div className="camera-container">
			{canUseMD ? <video ref={videoRef}></video> : null}
			<p>{statusMessage}</p>
		</div>
	)
}
