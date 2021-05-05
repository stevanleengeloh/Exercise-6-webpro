import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Exercise5 from './components/pages/Exercise5';
import Exercise6 from './components/pages/Exercise6';
import NavBar from './components/atoms/NavBar';

function App() {
  return (
    <Router>
        <NavBar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Exercise5">
              <Exercise5 />
            </Route>
            <Route exact path="/Exercise6">
              <Exercise6 />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;