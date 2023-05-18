
import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Competitions from './components/pages/Competitons';
import Authentication from './components/pages/Authentication';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import OurTeame from './components/pages/OurTeam';
import Adelina from './components/pages/Adelina';
import Information from './components/pages/Information';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
import Other from './components/pages/Other';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/out-team' element={<OurTeame />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='adelina' element={<Adelina />}/>
      <Route path='/competitions' element={<Competitions />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/authentication' element={<Authentication />}/>
      <Route path='/information/:id' element={<Information />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/edit' element={<Edit />}/>
      <Route path='/other' element={<Other />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
