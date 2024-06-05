import React from 'react';
import PropTypes from 'prop-types';
import '../styles/LoginInput.css'; // Import CSS file for styling
import useInput from '../hooks/useInput'; // Import useInput hook

function LoginInput({ login }) {
  const [email, setEmail] = useInput(''); // Using useInput hook for email
  const [password, setPassword] = useInput(''); // Using useInput hook for password

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  };

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={setEmail} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={setPassword} />
      <button type="button" onClick={onSubmitHandler}>Login</button>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
