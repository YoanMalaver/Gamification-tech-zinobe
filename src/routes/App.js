import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Administrator from '../containers/Administrator';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Crud from '../containers/Crud.js';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/User' component={Register} />
        <Route exact path='/Administrator' component={Administrator} />
        <Route exact path='/Crud' component={Crud} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
