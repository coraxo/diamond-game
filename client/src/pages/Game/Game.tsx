// @ts-ignore
import logo from '../../assets/images/shuriken.svg'
import { useEffect, useState } from 'react'
import ApiStatus from '../../components/ui/ApiStatus'
import DiamondWidget from '../../components/ui/DiamondWidget'
import CreatePlayerForm from './CreatePlayerForm'
import { getPlayer } from '../../api/GameApi'

import { PlayerData } from '../../types'

function Game() {
  const [playerData, setPlayerData] = useState <PlayerData>({ name: null, diamonds: null })

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
        }
      } catch (error) {
        console.log('Failed to fetch user on initial load')
      }
    }

    fetchPlayer()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Adventure game</p>
      </header>
      {playerData.name ?
      (
        <>
          <DiamondWidget />
          <p>
            {playerData.name} is playing the game.
          </p>
        </>
      )
      :
      (
        <>
          <CreatePlayerForm playerData={playerData} setPlayerData={setPlayerData} />
        </>
      )}
      <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        Exit game
      </a>
      <ApiStatus />
    </div>
  )
}

export default Game
