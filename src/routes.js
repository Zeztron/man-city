import React from 'react';
import Layout from "./Hoc/Layout";
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/PrivateRoutes';
import PublicRoute from './Components/authRoutes/PublicRoutes';

import Home from "./Components/home";
import SignIn from './Components/signin';

// Admin routes
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/AddEditMatch';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
