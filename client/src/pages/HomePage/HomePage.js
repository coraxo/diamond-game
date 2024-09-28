import logo from '../../assets/images/shuriken.svg';
import ApiStatus from '../../components/ui/ApiStatus';
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
          Adventure game
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

export default HomePage;
