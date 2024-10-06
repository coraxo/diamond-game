import { fetchStatus } from '../../api/GameApi'
import { useEffect, useState } from 'react'

function ApiStatus() {
  const [error, setError] = useState<string>()
  const [status, setStatus] = useState('')
  const statusClass = status === '200' ? 'status-ok' : 'status-error'

  useEffect(() => {
    const getStatus = async () => {
      try {
        const statusCode = await fetchStatus()
        setStatus(statusCode.toString())
      } catch (error) {
        setError('Failed to fetch status')
      }
    }

    getStatus()
  }, [])

  return( 
    <div>
      <p>
        Api status: <span className={`status-indicator ${statusClass}`}></span>
      </p>
    </div>
  )
}

export default ApiStatus