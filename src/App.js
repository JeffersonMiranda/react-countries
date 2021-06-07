import { useEffect } from 'react'

import logo from './logo.svg';
import './App.css';
import CountriesService from './services/CountriesService'

function App() {
  useEffect(() => {
    console.log("start")
    const service  = new CountriesService()

    service.getAll().then(response => {
      console.log(response)
    })

  }, [])

  return (
    <div className="App">
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
