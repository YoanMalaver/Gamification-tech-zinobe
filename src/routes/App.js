import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import DashboardAdmin from '../containers/DashboardAdmin';
import CrearUsuarios from '../pages/CrearUsuarios';
import CrearEquipos from '../pages/CrearEquipos';
import CrearSeniorities from '../pages/CrearSeniorities';
import Equipo from '../pages/Equipo';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboardadmin' component={DashboardAdmin} />
          <Route exact path='/crearusuarios' component={CrearUsuarios} />
          <Route exact path='/crearseniorities' component={CrearSeniorities} />
          <Route exact path='/crearequipos' component={CrearEquipos} />
          <Route exact path='/equipo' component={Equipo} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
