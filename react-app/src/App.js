import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate, getAllUsersThunk } from './store/session';
import NewHome from './components/homes/NewHome/NewHome';
import { getAllHomesThunk } from './store/homes';
import HomePage from './components/HomePage/HomePage';
import EditHome from './components/homes/EditHome/EditHome';
import { getAllBookingsThunk } from './store/bookings';
import HomeListing from './components/homes/HomeListing/HomeListing';
import BookingListing from './components/bookings/BookingListing/BookingListing';
import EditBooking from './components/bookings/EditBooking/EditBooking';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllHomesThunk())
      await dispatch(getAllBookingsThunk())
      await dispatch(getAllUsersThunk())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/homes/new' exact={true}>
          <NewHome />
        </Route>
        <Route path='/homes/:id' exact={true}>
          <HomeListing />
        </Route>
        <Route path='/homes/:id/edit' exact={true}>
          <EditHome />
        </Route>
        <Route path='/bookings' exact={true}>
          <BookingListing />
        </Route>
        <Route path='/bookings/:id/edit' exact={true}>
          <EditBooking />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
