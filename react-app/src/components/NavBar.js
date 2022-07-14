
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const [logged, setLogged] = useState(false)
  const [display, setDisplay] = useState(true)

  const session = useSelector((state) => state.session);

  useEffect(() => {
    setLogged(session?.user ? true : false)
  }, [session])

  const showProfile = () => {
    setDisplay(!display)
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/homes/new' exact={true} activeClassName='active'>
            Add Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookings' exact={true} activeClassName='active'>
            My Bookings
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
