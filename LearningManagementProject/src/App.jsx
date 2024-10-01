import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    
<Router>
  <Routes>
    <Route path="/" element={<><HomePage /></>}/>
        <Route path="/SignUp" element={
            <>
              <SignUpPage />
            </>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
