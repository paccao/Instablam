import { Route, Routes } from "react-router-dom"

import CapturePage from "./CapturePage"
import GalleryPage from "./GalleryPage"
import FullscreenDisplayPage from "./FullscreenDisplayPage"

function Pages() {
	return (
		<Routes>
			<Route path="/" exact element={<CapturePage />} />
			<Route path="/gallery" element={<GalleryPage />} />
			<Route path="/display" element={<FullscreenDisplayPage />} />
		</Routes>
	)
}

export default Pages
