import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer'; // Import Footer
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </Router>
    </div>
  );
}

export default App;
