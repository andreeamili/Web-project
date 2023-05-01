import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Competitions from './components/pages/Competitons';
import Authentication from './components/pages/Authentication';
import Stables from './components/pages/Stables';
import About_us from './components/pages/About_us';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about_us' element={<About_us />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/competitions' element={<Competitions />}/>
      <Route path='/stables' element={<Stables />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/authentication' element={<Authentication />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
