import './App.css';
import './components/styles.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from  './components/BookingPage';
import HeroSection from  './components/HeroSection';
import Highlights from  './components/Highlights';
import Testimonials from './components/Testimonials';
import About from  './components/About';
import ServicePage from './components/ServicePage';
import LoginPage from './components/loginPage';
import ConfirmedBooking from  './components/ConfirmedBooking';
import OrderOnlinePage from './components/OrderOnlinePage';
import ContactPage from './components/ContactPage';
function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Header" element={<Header />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/BookingPage" element={<BookingPage/>} />
        <Route path="/HeroSection" element={<HeroSection />} /> 
        <Route path="/Highlights" element={<Highlights />} /> 
        <Route path="/loginPage" element={<LoginPage/>} /> 
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/ServicePage" element={<ServicePage/>} /> 
        <Route path="/OrderOnlinePage" element={<OrderOnlinePage />} /> 
        <Route path="/BookingConfirmed" element={<ConfirmedBooking />} />
        <Route path="/contactPage" element={<ContactPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
