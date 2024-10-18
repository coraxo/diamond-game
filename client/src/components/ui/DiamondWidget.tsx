// @ts-ignore
import diamondIcon from '../../assets/images/diamond.svg'
import { fetchDiamondCount } from '../../api/GameApi'
import { useEffect, useState } from 'react'
import { DiamondWidgetProps } from '../../types'

const DiamondWidget: React.FC<DiamondWidgetProps> = ({ enabled }) => {
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

    if (enabled) {
      getStatus()
    }
  }, [enabled])

  if (enabled) {
    return (
      <div className="diamond-widget">
        <p>
          { error ? `Error fetching data` :
            (
              <>
                <img className="diamond-icon" src={diamondIcon} alt="Diamond" />
                <span className="diamond-count">{diamonds}</span>
              </>
            )
          }
        </p>
      </div>
    )
  }
  return ''
}

export default DiamondWidget