import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Page/Main';
import Community from './Page/Community';
import Login from './Page/Login';
import Signup from './Page/Signup';
import Profile from './Page/Profile';
import { UserProvider } from './Page/UserContext';
import Testpage from './Page/Testpage'; //Test 페이지 받아서 연결
import NotFound from './Page/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/testpage" element={<Testpage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
