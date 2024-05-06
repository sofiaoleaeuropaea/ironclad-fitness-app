import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/home/Home';
import Membership from './pages/membership/Membership';
import FitnessEvaluation from './pages/evaluation/FitnessEvaluation';
import About from './pages/about/About';
import TeamMember from './pages/about/TeamMember';
import Contacts from './pages/contacts/Contacts';
import SignUp from './pages/sign_up/SignUp';
import ErrorPage from './pages/error_page/ErrorPage';


// const position = useMousePosition();

import './styles/main.scss';


function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<main>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/membership" element={<Membership />} />
						<Route path="/fitnessevaluation" element={<FitnessEvaluation />} />

						<Route path="/about/*" element={<About />}/>
					
						<Route path="/about/:id" element={<TeamMember />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/signup" element={<SignUp />} />

						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
