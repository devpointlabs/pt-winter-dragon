import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menus from './components/Menus';
import EditMenu from './components/EditMenu';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import ReservationForm from  './components/ReservationForm';
// import Menu from './components/Menu';
// import Cart from '/components/Cart';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer'
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute'
import Admin from './components/Admin';
import Users from './components/Users';
import User from './components/User';
import ConfirmationRes from './components/ConfirmationRes'
import Cart from './components/Cart';
import Food from './components/Food';
import TaxnFees from './components/TaxnFees';
import TaxnFeeForm from './components/TaxnFeeForm'; 
import CartTotal from './components/CartTotal';





const App = () => (
  <Fragment>
     <NavBar />
     <FetchUser>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/food' component={Food} />
      

      <Route exact path='/taxnfees' component={TaxnFees} />
      <Route exact path='/taxnfeeform' component={TaxnFeeForm} />

      <Route exact path='/carttotal' component={CartTotal} />

      {/* <Route exact path='/menu' component={Menus} /> */}
      <AdminRoute exact path='/edit-menu/:id' component={EditMenu} />
      <AdminRoute exact path='/create-new-menu' component={Menus} />
      <Route exact path='/menu' component={Menu} />
      {/* <Route exact path='/cart' component={Cart} /> */}
      <Route exact path='/reservations' component={Reservations} />
      <Route exact path='/reservationform' component={ReservationForm} />
      {/* <Route exact path='/contacts' component={Contact} /> */}
      <Route exact path='/cart' component={Cart}/>

      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      {/* <Route component={NoMatch} /> */}
      {/* <Route exact path='/admindash' component={AdminDash} /> */}

      <AdminRoute exact path="/admin" component={Admin} />
      <AdminRoute exact path="/users" component={Users} />
      <AdminRoute exact path="/users/:id" component={User} />
      <Route exact path="/confirmation" component={ConfirmationRes} />
      <Route component={NoMatch} />
      <ProtectedRoute exact path="/admin" component={Admin} />
      {/* <Route component={NoMatch} /> */}
      {/* <Route exact path='/admindash' component={AdminDash} /> */}

    </Switch>
    </FetchUser>
    <Footer />
  </Fragment>
);


export default App;