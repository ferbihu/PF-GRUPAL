
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Landing}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
