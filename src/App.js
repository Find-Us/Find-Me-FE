import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

import Main from './Page/Main';
import Community from './Page/Community';
import Login from './Page/Login';
import Signup from './Page/Signup';
import Profile from './Page/Profile';

import TestHome from './Components/TestPage/TestHome'; 
import TestResult from './Components/TestPage/TestResult';

import TestResultJoy from './Components/TestPage/TestResultJoy';
import TestResultLonly from './Components/TestPage/TestResultLonly';
import TestResultTired from './Components/TestPage/TestResultTired';
import TestResultAngry from './Components/TestPage/TestResultAngry';

import TestPage1 from './Components/TestPage/TestQA/TestPage1'
import TestPage2 from './Components/TestPage/TestQA/TestPage2';
import TestPage3 from './Components/TestPage/TestQA/TestPage3';
import TestPage4 from './Components/TestPage/TestQA/TestPage4';
import TestPage5 from './Components/TestPage/TestQA/TestPage5';
import TestPage6 from './Components/TestPage/TestQA/TestPage6';
import TestPage7 from './Components/TestPage/TestQA/TestPage7';
import TestPage8 from './Components/TestPage/TestQA/TestPage8';
import TestPage9 from './Components/TestPage/TestQA/TestPage9';
import TestPage10 from './Components/TestPage/TestQA/TestPage10';
import TestPage11 from './Components/TestPage/TestQA/TestPage11';
import TestPage12 from './Components/TestPage/TestQA/TestPage12';

import Recommend from './Components/TestPage/Recommend'; 
import ReMovie from './Components/TestPage/ReMovie';
import ReSong from './Components/TestPage/ReSong';
import ReBook from './Components/TestPage/ReBook';
import ReAll from './Components/TestPage/ReAll';

import Not_Found from './Page/Not_Found';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TestHome" element={<TestHome />} />
          <Route path="/TestResult" element={<TestResult />} />
          <Route path="/TestResultJoy" element={<TestResultJoy />} />
          <Route path="/TestResultLonly" element={<TestResultLonly />} />
          <Route path="/TestResultTired" element={<TestResultTired />} />
          <Route path="/TestResultAngry" element={<TestResultAngry />} />

          <Route path="/Recommend" element={<Recommend/>} />

          <Route path="/ReMove" element={<ReMovie />} />
          <Route path="/ReSong" element={<ReSong />} />
          <Route path="/ReBook" element={<ReBook />} />
          <Route path="/ReAll" element={<ReAll />} />


          <Route path='/TestPage1' element={<TestPage1 />} />
          <Route path='/TestPage2' element={<TestPage2 />} />
          <Route path='/TestPage3' element={<TestPage3 />} />
          <Route path='/TestPage4' element={<TestPage4 />} />
          <Route path='/TestPage5' element={<TestPage5 />} />
          <Route path='/TestPage6' element={<TestPage6 />} />
          <Route path='/TestPage7' element={<TestPage7 />} />
          <Route path='/TestPage8' element={<TestPage8 />} />
          <Route path='/TestPage9' element={<TestPage9 />} />
          <Route path='/TestPage10' element={<TestPage10 />} />
          <Route path='/TestPage11' element={<TestPage11 />} />
          <Route path='/TestPage12' element={<TestPage12 />} />

          <Route path='/ReMovie' element={<ReMovie />} />
          <Route path='/ReSong' element={<ReSong />} />
          <Route path='/ReBook' element={<ReBook />} />
          <Route path='/ReAll' element={<ReAll />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Not_Found />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



