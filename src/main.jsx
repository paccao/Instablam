import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import MediaProvider from "./contexts/MediaContext"
import "./index.css"

ReactDOM.render(
	<React.StrictMode>
		<MediaProvider>
			<App />
		</MediaProvider>
	</React.StrictMode>,
	document.getElementById("root"),
)
