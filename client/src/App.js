import React, {Fragment} from 'react';
// Routes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
// components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/alert/Alert';
// States
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <div className='App'>
                <Navbar/>
                <div className='container'>
                  <Alert/>
                  <Switch>
                    <PrivateRoute exact path="/" component ={Home}/>
                    <Route exact path="/about" component ={About}/>
                    <Route exact path="/login" component ={Login}/>
                    <Route exact path="/register" component ={Register}/>
                  </Switch>
                </div>
              </div>   
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
