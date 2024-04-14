import React from 'react';
import { Routes, Route } from 'react-router';
import Home from "./pages/Home";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import More from "./pages/More";
import './App.css';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/more' element={<More />} />
            </Routes>
       
        </div>
    );
}

export default App;
