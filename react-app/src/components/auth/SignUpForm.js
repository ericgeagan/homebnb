import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords must match.'])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='form-container'>
      <div id='form-header'>Sign Up</div>
      <div id='notice'><p>Required fields</p>&nbsp;are in red and marked with an&nbsp;<p>*</p></div>
      <form id='form' onSubmit={onSignUp}>
        <div id='errors'>
          {errors.map((error, ind) => (
            <div id='error' key={ind}>{error}</div>
          ))}
        </div>
        <div id='form-box'>
          <label id='required'>User Name *</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            required
          ></input>
        </div>
        <div id='form-box'>
          <label id='required'>Email *</label>
          <input
            type='email'
            name='email'
            onChange={updateEmail}
            value={email}
            required
          ></input>
        </div>
        <div id='form-box'>
          <label id='required'>Password *</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            required
          ></input>
        </div>
        <div id='form-box'>
          <label id='required'>Repeat Password *</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required
          ></input>
        </div>
        <button id='reserve' type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
