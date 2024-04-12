import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Buttons from './components/Buttons';

import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';
import ErrorPage from './pages/error_page/ErrorPage';

import './styles/main.scss';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<main>
					<Routes>
						<Route index element={<Home />} />

						<Route path="/contacts" element={<Contacts />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
