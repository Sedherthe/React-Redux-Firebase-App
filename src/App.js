import React, {Component} from 'react';
import './App.css';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DashBoard from './components/dashboard/DashBoard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <DashBoard/>
            </Route>
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/create" component={CreateProject} />
         </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
