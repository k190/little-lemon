import './App.css';
import './components/styles.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Header" element={<Header />} />
        <Route path="/Main" element={<Main />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
