import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import ReservationForm from  './components/ReservationForm';
// import Menu from './components/Menu';
// import Cart from '/components/Cart';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
// import NoMatch from '/components/NoMatch';
import Footer from './components/Footer'

const App = () => (
  <Fragment>
     <NavBar /> 
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/menu' component={Menu} /> */}
      {/* <Route exact path='/cart' component={Cart} /> */}
      <Route exact path='/reservations' component={Reservations} />
      <Route exact path='/reservationform' component={ReservationForm} />
      <Route exact path='/contacts' component={Contact} />
      {/* <Route component={NoMatch} /> */}

    </Switch>
    <Footer />
  </Fragment>
);


export default App;
