import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from '../HomePage/HomePage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w'>
    
      <Router>
      <Routes>
        <Route path="/" element={
            <>
              <HomePage />
            </>
}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
