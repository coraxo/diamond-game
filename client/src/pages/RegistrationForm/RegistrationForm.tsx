// @ts-ignore
import logo from '../../assets/images/shuriken.svg'
import { useState } from 'react'
import { sendRegistration } from '../../api/AuthApi'

export interface RegistrationFormData {
  username: string
  password: string
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({ username: '', password: ''})
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    try {
      const result = sendRegistration(formData)
      console.log('Registered succesfully')
      setSuccess(true)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("Unknown error!")
      }
      console.log('Error during registration: ', error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Adventure game</p>
      </header>
      <p>
        You are registering to play the game.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        Back
      </a>
    </div>
  )
}

export default RegistrationForm
