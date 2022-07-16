
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './navbar.css'
import homeIcon from './images/homeIcon.png'

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
    <div>
      {logged && <div id='loginbar'>
        <div id='logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img id='icon' src={homeIcon}></img>
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
        <div id='navs'>
          <NavLink id='navlink' to='/homes/new' exact={true} activeClassName='active'>
            <div id='link'>Become a Host</div>
          </NavLink>
        </div>
        <div>
          {logged && <NavLink id='navLink' to='/bookings' exact={true} activeClassName='active'>
            <div id='circle'>
              <i id='profile' className="fa-solid fa-bars"></i>
            </div>
          </NavLink>}
        </div>
      </div>}
    </div>
  )

  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink to='/' exact={true} activeClassName='active'>
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/login' exact={true} activeClassName='active'>
  //           Login
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/sign-up' exact={true} activeClassName='active'>
  //           Sign Up
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/homes/new' exact={true} activeClassName='active'>
  //           Add Home
  //         </NavLink>
  //       </li>
  //       <li>
          // <NavLink to='/bookings' exact={true} activeClassName='active'>
          //   My Bookings
          // </NavLink>
  //       </li>
  //       {/* <li>
  //         <NavLink to='/users' exact={true} activeClassName='active'>
  //           Users
  //         </NavLink>
  //       </li> */}
  //       <li>
  //         <LogoutButton />
  //       </li>
  //     </ul>
  //   </nav>
  // );
}

export default NavBar;
