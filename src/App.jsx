import { BrowserRouter } from "react-router-dom"
import Pages from "./routes/Index"

function App() {
	return (
		<>
			<BrowserRouter>
				<Pages />
			</BrowserRouter>
		</>
	)
}

export default App
