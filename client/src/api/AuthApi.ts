import { RegistrationFormData } from "../pages/RegistrationForm/RegistrationForm"

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
    throw error
  }
}
