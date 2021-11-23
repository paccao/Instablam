import { BrowserRouter } from "react-router-dom"
import Pages from "./routes/Index"
export default function App() {
	return (
		<>
			<BrowserRouter>
				<Pages />
			</BrowserRouter>
		</>
	)
}
