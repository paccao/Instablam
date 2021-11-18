import Camera from "../components/Media/Camera"
import CameraButtonsField from "../components/Media/CameraButtonsField"

export default function CapturePage() {
	return (
		<>
			<div>
				<h1>Instablam</h1>
			</div>
			<Camera />
			<CameraButtonsField />
		</>
	)
}
