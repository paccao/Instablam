import { useRef, useState, useEffect, useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import { cameraOff, cameraOn } from "./mediaUtils"
import "./Media.css"

export default function Camera() {
	const [canUseMD, setCanUseMD] = useState(false)

	const {
		videoStream,
		setVideoStream,
		cameraIsOn,
		setCameraIsOn,
		statusMessage,
		setStatusMessage,
		videoRef,
	} = useContext(MediaContext)

	useEffect(() => {
		setCanUseMD("mediaDevices" in navigator)
	}, [])

	const handleCameraToggle = () => {
		if (cameraIsOn) {
			cameraOff(videoRef.current, () => setCameraIsOn(false))
		} else {
			cameraOn(
				{ videoStream, setVideoStream },
				videoRef.current,
				setStatusMessage,
				() => setCameraIsOn(true),
			)
		}
	}

	return (
		<div className="camera-container">
			{canUseMD ? <video ref={videoRef}></video> : null}
			<div>
				<button onClick={handleCameraToggle}>
					{cameraIsOn ? "Turn camera off" : "Turn camera on"}
				</button>
			</div>
			<p>{statusMessage}</p>
		</div>
	)
}
