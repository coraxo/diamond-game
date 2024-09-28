import logo from '../../assets/images/shuriken.svg';
import ApiStatus from '../../components/ui/ApiStatus';
import DiamondWidget from '../../components/ui/DiamondWidget';

function Game() {
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
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Exit game
          </a>
      </header>
    </div>
  );
}

export default Game;
