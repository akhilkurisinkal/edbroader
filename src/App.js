import React from 'react';
import './App.css';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Peers from './pages/peers/Peers';
import Search from './pages/search/Search';
import Notif from './pages/notif/Notif';
import Profile from './pages/profile/Profile';
import Verify from './pages/verify/Verify';
import Landing from './pages/landing/Landing';
import Level from './pages/backgroundCheck/education/Level';
import Field from './pages/backgroundCheck/education/Field';
import SubField from './pages/backgroundCheck/education/SubField';
import Career from './pages/backgroundCheck/career/Career';
import FinishBc from './pages/backgroundCheck/FinishBc';
import Country from './pages/Country';
import School from './pages/School';
import Program from './pages/Program';
function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/peers" element={<Peers/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/notif" element={<Notif/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/education/level" element={<Level/>}/>
          <Route path="/education/field" element={<Field/>}/>
          <Route path="/education/subField" element={<SubField/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/finishbc" element={<FinishBc/>}/>
          <Route path="/country" element={<Country/>}/>
          <Route path="/school" element={<School/>}/>
          <Route path="/program" element={<Program/>}/>
        </Routes>
        
        </div>
      </BrowserRouter>
  );
}

export default App;
