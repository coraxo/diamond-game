// @ts-ignore
import { fetchDiamondCount } from '../../api/GameApi'
import { useEffect, useState } from 'react'

function DiamondWidget() {
  const [error, setError] = useState<string>()
  const [diamonds, setDiamonds] = useState('Fetching...')

  useEffect(() => {
    const getStatus = async () => {
      try {
        const data = await fetchDiamondCount()
        setDiamonds(data['diamonds'])
      } catch (e) {
        setError('Failed to fetch status')
      }
    }

    getStatus()
  }, [])

  return (
    <div>
      <p>
        { error ? `Error fetching data` : `Diamonds: ${diamonds}` }
      </p>
    </div>
  )
 }

 export default DiamondWidget