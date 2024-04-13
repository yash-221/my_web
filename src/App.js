import React from 'react';
import { Routes, Route } from 'react-router';
import Home from "./pages/Home";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Singup from "./pages/Signup";
import Contact from "./pages/Contact";
import More from "./pages/More";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Singup />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/more' element={<More />} />
            </Routes>
       <Footer/>
        </div>
    );
}

export default App;
