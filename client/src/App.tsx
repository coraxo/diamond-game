import './App.css'
// @ts-ignore
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Game from './pages/Game/Game'
import RegistrationForm from './pages/RegistrationForm/RegistrationForm'
import { useState } from 'react'

export interface authVarsData {
  jwtToken: string | null
}

function App() {
  const [authVars, setAuthVars] = useState ({ jwtToken: null})

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/registration" element={<RegistrationForm />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </Router>
  )
}

export default App
