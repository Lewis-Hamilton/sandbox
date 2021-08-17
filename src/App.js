import Home from './components/home.js';
import Function from './components/function.js';
import Friday from './components/friday.js';
import Input from './components/input.js';
import ObjectPage from './components/object.js';
import Score from './components/score.js';
import Color from './components/color.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/function" component={Function}></Route>
      <Route exact path="/friday" component={Friday}></Route>
      <Route exact path="/input" component={Input}></Route>
      <Route exact path="/object" component={ObjectPage}></Route>
      <Route exact path="/score" component={Score}></Route>
      <Route exact path="/color" component={Color}></Route>
      </Switch>
    </Router>

  );
}

export default App;
