import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './loginform.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const demoUserLogin = async (e) => {
    const data = await dispatch(login("demo@aa.io", "password"));
  }

  return (
    <div id='form-container'>
      <div id='form-header'>Log In</div>
      <form id='form' onSubmit={onLogin}>
        <div id='errors'>
          {errors.map((error, ind) => (
            <div id='error' key={ind}>{error}</div>
          ))}
        </div>
        <div id='form-box'>
          <label id='required'  htmlFor='email'>Email *</label>
          <input
            name='email'
            type='text'
            value={email}
            onChange={updateEmail}
            required
          />
        </div>
        <div id='form-box'>
          <label id='required' htmlFor='password'>Password *</label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={updatePassword}
            required
          />
        </div>
        <button id='reserve' type='submit'>Login</button>
        <button id='reserve' type='button' onClick={demoUserLogin}>Demo User</button>
      </form>
    </div>
  );
};

export default LoginForm;
