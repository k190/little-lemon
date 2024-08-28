import './App.css';
import './components/styles.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container">
      <body>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </body>
    </div>
  );
}

export default App;
