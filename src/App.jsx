import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Buttons from "./components/Buttons"

import Home from './pages/Home';
import Contacts from "./pages/Contacts"

import './styles/main.scss';


function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<Navbar />
				</header>
				<main>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/contacts" element={<Contacts />} />
						{/* <Route path='*' element={<ErrorPage />} /> */}
					</Routes>
				</main>
				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</>
	);
}

export default App;
