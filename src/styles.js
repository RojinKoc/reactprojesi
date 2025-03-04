import logo from './logo.svg';
import { Title } from './components';


function styles(){
    return (
        <div className="App">
      <h3> { process.env.NODE_ENV} </h3>
      <p> {process.env.REACT_APP_API_URL} </p>
      <Title> { process.env.NODE_ENV} </Title>
      <Title theme="dark"> { process.env.NODE_ENV} </Title>

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

export default styles