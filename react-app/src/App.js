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
import gitHub from './components/images/github.png'
import linkedin from './components/images/linkedin.png'
import homeIcon from './components/images/homeIcon.png'

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
          <div id='forms'>
            <div id='title-banner'><img id='title-image' src={homeIcon}></img></div>
            <div id='forms-container'>
              <LoginForm />
              <SignUpForm />
            </div>
          </div>
        </Route>
        {/* <Route path='/sign-up' exact={true}>
          
        </Route> */}
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
        <ProtectedRoute>
          <div className='not-found' id='title-message'>Page Not Found</div>
        </ProtectedRoute>
      </Switch>
      <div id='footer'>
        <div id='footer-container'>
          <div id='footer-header'>Contact Info</div>
          <div id='footer-item'>ericgeagan@gmail.com</div>
          <a id='tech-link' href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons created by hqrloveq - Flaticon</a>
        </div>
        <div id='footer-container'>
          <div id='footer-header'>Developer Links</div>
          <div>
            <a href='https://github.com/ericgeagan'><img className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/in/eric-geagan-462323195/'><img className='icon' src={linkedin}></img></a>
          </div>
        </div>
        <div id='footer-container'>
          <div id='footer-header'>Technologies</div>
          <div id='footer-link'>
            <a id='tech-link' href='https://docs.python.org/3/index.html'>Python</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://flask.palletsprojects.com/en/1.1.x/'>Flask</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://wtforms.readthedocs.io/en/2.3.x/'>WTForms</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://flask-wtf.readthedocs.io/en/stable/'>FlaskWTF</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://flask-migrate.readthedocs.io/en/latest/'>Flask-Migrate</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://flask-sqlalchemy.palletsprojects.com/en/2.x/'>FlaskSQLAlchemy</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://alembic.sqlalchemy.org/en/latest/'>Alembic</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://reactjs.org/docs/getting-started.html'>React</a>
          </div>
          <div id='footer-link'>
            <a id='tech-link' href='https://github.com/boto/boto3'>Boto3 AWS</a>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
