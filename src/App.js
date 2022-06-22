import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import StudentHome from './pages/StudentHome';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StudentPeers from './pages/StudentPeers';
import Search from './pages/Search';
import Notif from './pages/Notif';
import Profile from './pages/Profile';
function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Header/>
        <Routes>
          <Route path="/studentHome" element={<StudentHome/>}/>
          <Route path="/studentPeers" element={<StudentPeers/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/notif" element={<Notif/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        
        </div>
      </BrowserRouter>
  );
}

export default App;
