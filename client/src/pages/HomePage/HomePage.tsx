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
            <div className="welcome-splash">
              <p>Welcome, {userData.username}!</p>
              <div className="play-button">
                <a
                  //className="play-button"
                  href="/game"
                  rel="noopener noreferrer"
                >
                  Play game
                </a>
              </div>
            </div>
          )
          :
          (
            <>
              <h2>Log in to play the game</h2>
              <LoginForm authVars={authVars} setAuthVars={setAuthVars} userData={userData} setUserData={setUserData} />
              <p>Or</p>
              <a
                className="App-link"
                href="/registration"
                rel="noopener noreferrer"
              >
                Create an account
              </a>
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
