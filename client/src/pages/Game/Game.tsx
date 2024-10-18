// @ts-ignore
import logo from '../../assets/images/shuriken.svg'
import { useEffect, useState } from 'react'
import ApiStatus from '../../components/ui/ApiStatus'
import DiamondWidget from '../../components/ui/DiamondWidget'
import CreatePlayerForm from './CreatePlayerForm'
import { getNewLocation, getPlayer } from '../../api/GameApi'
import SentenceSplitter from '../../components/ui/SentenceSplitter'

import { PlayerData } from '../../types'
import { LocationData } from '../../types'

function Game() {
  const [playerData, setPlayerData] = useState <PlayerData>({ name: null, diamonds: null })
  const [locationData, setLocationData] = useState <LocationData>({ biome: '', description: '' })
  let playerDataInitialized = playerData.diamonds !== null

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const { player } = await getPlayer()
        if (player && player.name) {
          setPlayerData((prevPlayerData) => ({
            ...prevPlayerData,
            name: player.name,
            diamonds: player.diamonds
          }))
          setLocationData((prevLocationData) => ({
            ...prevLocationData,
            biome: player.currentRoom.biome,
            description: player.currentRoom.description
          }))
        }
      } catch (error) {
        console.log('Failed to fetch user on initial load')
      }
    }

    fetchPlayer()
  }, [])

  const handleMovement = async (e: React.MouseEvent) => {
    e.preventDefault()

    try {
      const { location } = await getNewLocation()
      if (location && location.description) {
        setLocationData((prevLocationData) => ({
          ...prevLocationData,
          biome: location.biome,
          description: location.description
        }))
      }
    } catch (error) {
      console.log('Failed to fetch new location')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Adventure game</p>
        {playerDataInitialized && <DiamondWidget enabled={playerDataInitialized} />}
      </header>
      {playerData.name ?
      (
        <>
          <div className='gameRender'>
            <div className="room-description">
              <SentenceSplitter text={locationData.description} />
            </div>
          </div>
          <div className='gameControls'>
            <p>What would {playerData.name} do?</p>
            <a
              className="App-link"
              href="/"
              rel="noopener noreferrer"
              onClick={handleMovement}
            >
              Keep moving
            </a>
          </div>
        </>
      )
      :
      (
        <div className="gameRender">
          <h2>Character creation</h2>
          <CreatePlayerForm playerData={playerData} setPlayerData={setPlayerData} setLocationData={setLocationData} />
        </div>
      )}
      <div className="footer">
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Exit game
        </a>
        <ApiStatus />
      </div>
    </div>
  )
}

export default Game
