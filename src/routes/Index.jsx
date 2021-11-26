import { Route, Routes } from "react-router-dom"

import CapturePage from "./CapturePage"
import GalleryPage from "./GalleryPage"

export default function Pages() {
	return (
		<Routes>
			<Route path="/" index element={<CapturePage />} />
			<Route path="/gallery" element={<GalleryPage />} />
		</Routes>
	)
}
