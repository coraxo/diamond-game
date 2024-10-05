import { useEffect } from 'react'
// @ts-ignore
import logo from '../../assets/images/shuriken.svg'
// @ts-ignore
import ApiStatus from '../../components/ui/ApiStatus'
import LoginForm from '../../components/auth/LoginForm'
import { AuthVarsData } from '../../App'
import { UserData } from '../../App'
import { logout } from '../../api/AuthApi'


interface HomePageProps {
  authVars: AuthVarsData
  setAuthVars: React.Dispatch<React.SetStateAction<AuthVarsData>>
  userData: UserData,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

const HomePage: React.FC<HomePageProps> = ({ authVars, setAuthVars, userData, setUserData }) => {

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault()
    const doLogout = async () => {
      try {
        const response = await logout()
        console.log(response)
        setUserData((prevUserData) => ({
          ...prevUserData,
          username: null
        }))
      } catch (error) {
        console.log('Failed to logout')
      }
    }

    doLogout()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adventure game
        </p>
        <ApiStatus />
        {userData.username ?
          (
            <>
              <p>Hello {userData.username}!</p>
              <a
                className="App-link"
                href="/logout"
                rel="noopener noreferrer"
                onClick={handleLogout}
              >
                Log out
              </a>
              <a
                className="App-link"
                href="/game"
                rel="noopener noreferrer"
              >
                Play game
              </a>
            </>
          )
          :
          (
            <>
              <a
                className="App-link"
                href="/registration"
                rel="noopener noreferrer"
              >
                Register
              </a>
              <LoginForm authVars={authVars} setAuthVars={setAuthVars} userData={userData} setUserData={setUserData} />
            </>
          )
        }
      </header>
    </div>
  )
}

export default HomePage
