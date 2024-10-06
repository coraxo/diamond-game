import { RegistrationFormData } from "../types/index"
import { LoginFormData } from "../types/index"

const apiBase = 'http://localhost:3001/api'

export const sendRegistration = async (formData: RegistrationFormData) => {
  try {
    const response = await fetch(apiBase + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Registration failed')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("Caught error: ", error)
    throw error
  }
}

export const sendLogin = async (formData: LoginFormData) => {
  try {
    const response = await fetch(apiBase + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("Caught error: ", error)
    throw error
  }
}

export const getUser = async () => {
  try {
    const response = await fetch(apiBase + '/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error('Fetching user failed')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("Caught error: ", error)
    throw error
  }
}


export const logout = async () => {
  try {
    const response = await fetch(apiBase + '/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error('Logout failed')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("Caught error: ", error)
    throw error
  }
}

