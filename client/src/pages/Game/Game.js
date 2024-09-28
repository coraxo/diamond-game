import logo from '../../assets/images/shuriken.svg';
import ApiStatus from '../../components/ui/ApiStatus';
import DiamondWidget from '../../components/ui/DiamondWidget';

function Game() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Adventure game</p>
      </header>
      <DiamondWidget />
      <p>
        You are playing the game.
      </p>
      <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        Exit game
      </a>
      <ApiStatus />
    </div>
  );
}

export default Game;
