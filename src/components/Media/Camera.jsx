import { useEffect, useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import "./Media.css"

export default function Camera() {
	const {
		statusMessage,
		statusMessageContainerRef,
		videoRef,
		canUseMD,
		setCanUseMD,
	} = useContext(MediaContext)

	useEffect(() => {
		setCanUseMD("mediaDevices" in navigator)
	}, [])

	useEffect(()=>{
		statusMessageContainerRef.current.style.display = 'none'
	},[statusMessageContainerRef])

	return (
		<div className="camera-container">
			{canUseMD ? <video ref={videoRef}></video> : null}
			<div ref={statusMessageContainerRef} id="statusMessageContainer">
				<p>{statusMessage}</p>
				<button
					aria-label="Hide status message button"
					onClick={() => {
						statusMessageContainerRef.current.style.display = "none"
					}}
				>
					Ok
				</button>
			</div>
		</div>
	)
}
