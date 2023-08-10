import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
