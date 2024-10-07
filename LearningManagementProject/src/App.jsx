import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LogInPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import CoursesPage from '../CoursesPage/CoursesPage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    
<Router>
  <Routes>
    <Route path="/" element={<><HomePage /></>}/>
    <Route path="/SignUp" element={<><SignUpPage /></>}/>
    <Route path="/LogIn" element={<><LoginPage /></>}/>
    <Route path="/Profile" element={<><ProfilePage /></>}/>
    <Route path="/Courses" element={<><CoursesPage /></>}/>
    
  </Routes>
</Router>
    </div>
  )
}

export default App
