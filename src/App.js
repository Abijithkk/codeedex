import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Services from './pages/Services';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor /> {/* Add the MousePointerFollow component here */}
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<Aboutus></Aboutus>} ></Route>
        <Route path='/contactus' element={<Contactus></Contactus>} ></Route>
        <Route path='/services' element={<Services></Services>} ></Route>
        <Route path='/footer' element={<Footer></Footer>} ></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
