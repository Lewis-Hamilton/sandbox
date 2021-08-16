import Home from './components/home.js';
import Function from './components/function.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/function" component={Function}></Route>
      </Switch>
    </Router>

  );
}

export default App;
