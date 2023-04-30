import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About_us from './pages/About_us';
import Authentication from './pages/Authentification';
import Contact from './pages/Contact';
import Competitions from './pages/Competiton';
import Stables from './pages/Stables';
import Services from './pages/Services';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact component={Home}/>
      <Route path='/about_us' component={About_us}/>
      <Route path='/services' component={Services}/>
      <Route path='/competitions' component={Competitions}/>
      <Route path='/stables' component={Stables}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/authentication' component={Authentication}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
