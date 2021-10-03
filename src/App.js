import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Details from './Components/Details/Details';
import Sports from './Components/Sports/Sports'
import About from './Components/About/About';
import { createContext, useState } from 'react';

export const userContext = createContext({
  name: 'Cristiano Ronaldo',
  mobile: '0177-1234568',
  age: 36,
  isLoggedin: false,
});

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/sports">
              <Sports></Sports>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/details/:teamId">
              <Details></Details>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div >
  );
}

export default App;
