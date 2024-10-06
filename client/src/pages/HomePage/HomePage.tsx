// @ts-ignore
import logo from '../../assets/images/shuriken.svg'
import ApiStatus from '../../components/ui/ApiStatus'
import LoginForm from '../../components/auth/LoginForm'
import { logout } from '../../api/AuthApi'
import { HomePageProps } from '../../types'

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
      </header>
      <div className="gameRender">
        {userData.username ?
          (
            <>
              <p>Hello {userData.username}!</p>
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
      </div>
      <div className="footer">
        {userData.username ?
        (
          <a
            className="App-link"
            href="/logout"
            rel="noopener noreferrer"
            onClick={handleLogout}
          >
            Log out
          </a>
        ) : ( '' )}
        <ApiStatus />
      </div>
    </div>
  )
}

export default HomePage
