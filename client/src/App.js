import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch'

import Reservations from './components/Reservations';
import ReservationForm from  './components/ReservationForm';

// import Menu from './components/Menu';
// import Cart from '/components/Cart';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import NoMatch from '/components/NoMatch';
import Footer from './components/Footer'
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './components/Admin';

const App = () => (
  <Fragment>
     <NavBar /> 
     <FetchUser>
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/menu' component={Menu} /> */}
      {/* <Route exact path='/cart' component={Cart} /> */}
      <Route exact path='/reservations' component={Reservations} />
      <Route exact path='/reservationform' component={ReservationForm} />
      <Route exact path='/contacts' component={Contact} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path="/admin" component={Admin} />
      {/* <Route component={NoMatch} /> */}

    </Switch>
    </FetchUser>
    <Footer />
  </Fragment>
);


export default App;
