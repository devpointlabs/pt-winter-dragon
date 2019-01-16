import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< Updated upstream
import Home from './components/Home';
// import Menu from './components/Menu';
=======
import Home from './components/Home'
import Menu from './components/Menu';
>>>>>>> Stashed changes
// import Cart from '/components/Cart';
// import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';
// import NoMatch from '/components/NoMatch';
<<<<<<< Updated upstream
import Footer from './components/Footer'
=======
import Reservations from './components/Reservations';
import Reservation from './components/Reservation';
>>>>>>> Stashed changes

const App = () => (
  <Fragment>
     <NavBar /> 
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/menu' component={Menu} /> */}
      {/* <Route exact path='/cart' component={Cart} /> */}
      <Route exact path='/reservations' component={Reservations} />
      <Route exact path='/reservations/:id' component={Reservation} />

      {/* <Route exact path='/contact' component={ContactForm} /> */}
      {/* <Route component={NoMatch} /> */}

    </Switch>
    <Footer />
  </Fragment>
);


export default App;
