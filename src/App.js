import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3> { process.env.NODE_ENV} </h3>
      <p> {process.env.REACT_APP_API_URL} </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>
  );
}

export default App;
