import logo from './logo.svg';
import flag from './flag.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Glory to Ukraine!
        </p>
        <img src={flag} className="App-flag" alt="flag" />
        <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
