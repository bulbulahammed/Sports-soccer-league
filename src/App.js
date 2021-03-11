import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teams from './components/Teams/Teams';
import Nomatch from './components/Nomatch/Nomatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/team">
          <Teams></Teams>
        </Route>

        <Route path="/teamid/:dynamicTeamId">
          <TeamDetail></TeamDetail>
        </Route>
        <Route exact path="/">
          <Teams></Teams>
        </Route>
        <Route path="*">
          <Nomatch></Nomatch>
        </Route>
      </Switch >
    </Router >
  );
}

export default App;
