import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import MediaContext from "./contexts/MediaContext"
import "./index.css"

ReactDOM.render(
	<React.StrictMode>
    <MediaContext>
		<App />
    <MediaContext/>
	</React.StrictMode>,
	document.getElementById("root"),
)
