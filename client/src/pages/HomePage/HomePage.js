import logo from '../../assets/images/logo.svg';
import { useEffect, useState } from 'react';

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
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play game
          </a>
      </header>
    </div>
  );
}

function CoolButton({count, onClick}) {
  let user = {name: "John"};

  return (
    <button onClick={onClick}>{user.name + ` ${count}`}</button>
  );
 }

function ApiStatus() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchApiStatus();
  }, []);

  const fetchApiStatus = async () => {
    const response = await fetch('http://localhost:3001/status');

    setStatus(response['status']);
  };

  return( 
    <div>
      <p>
        Api status: {status}
      </p>
    </div>
  );
}

export default HomePage;
