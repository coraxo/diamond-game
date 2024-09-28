import logo from '../../assets/images/logo.svg';
import ApiStatus from '../../components/ui/ApiStatus';
import DiamondWidget from '../../components/ui/DiamondWidget';
import { useState } from 'react';

function Game() {
  const [diamonds, setDiamonds] = useState(1000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DiamondWidget />
        <p>
          You are playing the game.
        </p>
        <ApiStatus />
          <a
            className="App-link"
            href="/game"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play game
          </a>
      </header>
    </div>
  );
}

export default Game;
