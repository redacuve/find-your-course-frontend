import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PublicRoute from '../Utils/PublicRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Dashboard from '../containers/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl">
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
