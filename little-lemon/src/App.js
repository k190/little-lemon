import './App.css';
import './components/styles.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import bookingForm from  './components/BookingForm';
import BookingPage from  './components/BookingPage';
import HeroSection from  './components/HeroSection';
function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Header" element={<Header />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/bookingForm" element={<bookingForm/>} />
        <Route path="/BookingPage" element={<BookingPage/>} />
        <Route path="/HeroSection" element={<HeroSection />} />
        
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
