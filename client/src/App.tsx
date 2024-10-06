import './App.css'
// @ts-ignore
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import Game from './pages/Game/Game'
import RegistrationForm from './pages/RegistrationForm/RegistrationForm'
import { getUser } from './api/AuthApi'
import { AuthVarsData } from './types'
import { UserData } from './types'

function App() {
  const [authVars, setAuthVars] = useState<AuthVarsData>({ jwtToken: null, csrfToken: null })
  const [userData, setUserData] = useState<UserData>({ username: null })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { user } = await getUser()
        if (user && user.username) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            username: user.username
          }))
        }
      } catch (error) {
        console.log('Failed to fetch user on initial load')
      }
    }

    fetchUser()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage authVars={authVars} setAuthVars={setAuthVars} userData={userData} setUserData={setUserData} />}/>
        <Route path="/registration" element={<RegistrationForm />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </Router>
  )
}

export default App
