import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from '/components/Home';
import Menus from './components/Menus';
import EditMenu from './components/EditMenu';
// import CreateMenu from './components/CreateMenu';
// import Cart from '/components/Cart';
// import ReservationForm from './components/ReservationForm';
// import ContactForm from './components/ContactForm';
// import NavBar from '/components/NavBar';
// import NoMatch from '/components/NoMatch';

const App = () => (
  <Fragment>
    {/* <NavBar /> */}
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path='/menu' component={Menus} />
      <Route exact path='/edit-menu/:id' component={EditMenu} />
      {/* <Route exact path='/create-new-menu' component={CreateMenu} /> */}
      {/* <Route exact path='/cart' component={Cart} /> */}
      {/* <Route exact path='/reservations' component={ReservationForm} /> */}
      {/* <Route exact path='/contact' component={ContactForm} /> */}
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </Fragment>
);

export default App;
