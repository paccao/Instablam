import { useContext } from "react"
import { MediaContext } from "../../contexts/MediaContext"
import { handleImgError, takePicture } from "./mediaUtils"

import { GiRapidshareArrow, GiCircle } from "react-icons/gi"

export default function CameraButtonsField() {
	const { videoStream, lastImageTaken, setLastImageTaken, pushToStateArray } =
		useContext(MediaContext)

	return (
		<div>
			<button>
				<GiRapidshareArrow />
			</button>
			<button
				onClick={() =>
					takePicture(
						videoStream,
						setLastImageTaken,
						pushToStateArray,
						setGalleryPictures,
					)
				}
			>
				<GiCircle />
			</button>
			<button>
				<div>
					{lastImageTaken && (
						<img
							src={lastImageTaken}
							alt="A preview of the last image taken in the gallery."
							onError={handleImgError}
						/>
					)}
				</div>
			</button>
		</div>
	)
}
