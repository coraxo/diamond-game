import { CreatePlayerFormData } from "../types"

const apiBase = 'http://localhost:3001/api'

export const fetchStatus = async () => {
  try {
    const response = await fetch(apiBase + '/status')
    return response.status
  } catch (error) {
    console.error('Error fetching status:', error)
    throw error
  }
}

export const createPlayer = async (formData: CreatePlayerFormData) => {
  try {
    const response = await fetch(apiBase + '/player', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Character creation failed')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("Caught error: ", error)
    throw error
  }
}

export const getPlayer = async () => {
  try {
    const response = await fetch(apiBase + '/player', {
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

export const fetchDiamondCount = async () => {
  try {
    const response = await fetch(apiBase + '/diamonds', {
      credentials: 'include'
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching status:', error)
    throw error
  }
}

export const getNewLocation = async () => {
  try {
    const response = await fetch(apiBase + '/newlocation', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error('Fetching new location failed')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log("Caught error: ", error)
    throw error
  }
}
