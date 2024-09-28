import logo from '../../assets/images/logo.svg';
import ApiStatus from '../../components/ui/ApiStatus';
import CoolButton from '../../components/ui/CoolButton';
import { useState } from 'react';

function HomePage() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CoolButton count={count} onClick={handleClick} />
        <CoolButton count={count} onClick={handleClick} />
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

export default HomePage;
