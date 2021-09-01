import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing}/>
      {/* <header className="App-header">

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
      </header> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
