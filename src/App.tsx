import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/SignUp';
import LogIn from './pages/auth/LogIn';
import ToDo from './pages/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<LogIn />}/>
          <Route path="/todo" element={<ToDo />}/>
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
