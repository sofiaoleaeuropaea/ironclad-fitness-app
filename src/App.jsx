import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';

import Home from './pages/home/Home';
import Membership from './pages/membership/Membership';
import Services from './pages/services/Services';
import ExercisesInstructions from './pages/services/ExercisesInstructions';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import TeamMember from './pages/about/TeamMember';
import Contacts from './pages/contacts/Contacts';
import SignUp from './pages/sign_up/SignUp';
import ErrorPage from './pages/error_page/ErrorPage';

import CreatePost from './api/CreatePost';
import UpdatePost from './api/UpdatePost';
import DeletePost from './api/DeletePost';

import './styles/main.scss';

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/services/*' element={<Services />}>
              <Route path=':id' element={<ExercisesInstructions />} />
            </Route>
            <Route path='/services/blog' element={<Blog />}></Route>
            <Route path='/create' element={<CreatePost />} />
            <Route path='/update/:id' element={<UpdatePost />} />
            <Route path='/delete/:id' element={<DeletePost />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/:id' element={<TeamMember />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/signup' element={<SignUp />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToAnchor />
      </BrowserRouter>
    </>
  );
};

export default App;
