import { BrowserRouter } from 'react-router-dom';
import Pages from './routes/Index';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Pages/>
			</BrowserRouter>
		</div>
	)
}

export default App
