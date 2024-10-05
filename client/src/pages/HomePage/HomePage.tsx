// @ts-ignore
import logo from '../../assets/images/shuriken.svg'
// @ts-ignore
import ApiStatus from '../../components/ui/ApiStatus'
import LoginForm from '../../components/auth/LoginForm'

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adventure game
        </p>
        <ApiStatus />
        <a
          className="App-link"
          href="/game"
          rel="noopener noreferrer"
        >
          Play game
        </a>
        <a
          className="App-link"
          href="/registration"
          rel="noopener noreferrer"
        >
          Register
        </a>
        <LoginForm />
      </header>
    </div>
  )
}

export default HomePage