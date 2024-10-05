// @ts-ignore
import { useState } from 'react'
import { sendLogin } from '../../api/AuthApi'
import { AuthVarsData } from '../../App'

interface LoginFormProps {
  authVars: AuthVarsData;
  setAuthVars: React.Dispatch<React.SetStateAction<AuthVarsData>>
}

export interface LoginFormData {
  username: string
  password: string
}

const LoginForm: React.FC<LoginFormProps> = ({ authVars, setAuthVars }) => {
  const [formData, setFormData] = useState<LoginFormData>({ username: '', password: ''})
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    try {
      const result = await sendLogin(formData)
      console.log('Login successful')
      console.log(result)
      
      setSuccess(true)
      setFormData({ username: '', password: ''})
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("Unknown error!")
      }
      console.log('Error during login: ', error)
    }
  }

  return (
    <>
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
        <button type="submit">Login</button>
      </form>
      {success ? (
        <p ><span className="green">Login successful!</span> Proceed to game</p>
      ) : ( '' )}
      {error ? (
        <p>Error: {error}</p>
      ) : ( '' )}
    </>
  )
}

export default LoginForm
