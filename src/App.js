import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Students from './components/Students';
import Staff from './components/Staff';
import House from './components/House';
import Start from './components/Start';
import Menu from './components/Menu';
import Gryffindor from './components/Gryffindor';
import Hufflepuff from './components/Hufflepuff';
import Ravenclaw from './components/Ravenclaw';
import Slytherin from './components/Slytherin';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
      </div>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/house" component={House} />
        <Route exact path="/house/gryffindor" component={Gryffindor} />
        <Route exact path="/house/hufflepuff" component={Hufflepuff} />
        <Route exact path="/house/ravenclaw" component={Ravenclaw} />
        <Route exact path="/house/slytherin" component={Slytherin} />
      </Switch>
    </Router>
  );
}

export default App;
