import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Pictures from './components/layout/Pictures'
import Footer from './components/layout/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Login1 from './components/auth/Login1'
import Dashboard from './components/auth/Dashboard'
import Privacy from './components/auth/Privacy'
import NotFound from './components/not-found/NotFound';
import 'bootstrap';
import './App.css';

const App = () => (

	<Router>
      <Fragment>
      <Navbar />
      <Route exact path="/" component={ Landing } />
      
      
      
     <div className="container">
     <Switch>
      <Route exact path="/" />
      <Route path="/shopify?shop=" component={Register} />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/login/:id" component={ Login1 } />
      <Route exact path="/dashboard" component={ Dashboard } />
      <Route exact path="/privacy" component={ Privacy } />

      <Route path="**" component={NotFound} />
      </Switch>
      </div>
      <Footer />
      </Fragment>
      </Router>
    );

export default App;
