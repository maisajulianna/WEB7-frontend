import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Start from './pages/Start';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Start />} />
              <Route path="login" element={<Login /> } />
              <Route path="signup" element={<Signup />} />
              <Route path="home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
