import './App.css'
// @ts-ignore
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Game from './pages/Game/Game'
import RegistrationForm from './pages/RegistrationForm/RegistrationForm'
import { useEffect, useState } from 'react'

export interface AuthVarsData {
  jwtToken: string | null,
  csrfToken: string | null
}

function App() {
  const [authVars, setAuthVars] = useState<AuthVarsData>({ jwtToken: null, csrfToken: null })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage authVars={authVars} setAuthVars={setAuthVars} />}/>
        <Route path="/registration" element={<RegistrationForm />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </Router>
  )
}

export default App
