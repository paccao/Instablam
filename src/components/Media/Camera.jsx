import { useRef, useState, useEffect } from "react"
import { cameraOff, cameraOn } from "./mediaUtils"
import "./Media.css"

export default function Camera() {
	const [canUseMD, setCanUseMD] = useState(false)
	const [cameraIsOn, setCameraIsOn] = useState(false)
	const [statusMessage, setStatusMessage] = useState("")
	const videoRef = useRef(null)

	useEffect(() => {
		setCanUseMD("mediaDevices" in navigator)
	}, [])

	const handleCameraToggle = (e) => {
		if (cameraIsOn) {
			cameraOff(videoRef.current, () => setCameraIsOn(false))
		} else {
			cameraOn(videoRef.current, setStatusMessage, () => setCameraIsOn(true))
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
