import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/login')
  };

  return (
    <NavLink id='navlink' to='/login' activeClassName='active'>
      <div id='logout' onClick={onLogout}>
        <div id='link' onClick={onLogout}>Logout</div>
      </div>
    </NavLink>
  );
};

export default LogoutButton;
