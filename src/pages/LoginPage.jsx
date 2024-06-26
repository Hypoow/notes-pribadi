import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import NavbarLogin from '../components/NavbarLogin';
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <div className="app-container">
    <NavbarLogin/>
      <main>
        <section className='login-page'>
          <h2>Yuk, login untuk menggunakan aplikasi</h2>
          <LoginInput login={onLogin} />
          <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
        </section>
      </main>
    </div>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;