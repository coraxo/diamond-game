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

export const fetchDiamondCount = async () => {
  try {
    const response = await fetch(apiBase + '/diamondCount', {
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
