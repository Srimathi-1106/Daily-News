import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';

function App() {
    return (
        <Router>
            <div className="bg">
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/news' element={<Cards/>}/>
                    </Routes>
                </div>
                
            </div>
        </Router>
    );
}

export default App;
