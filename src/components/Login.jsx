import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  // captura de informacion del formulario
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/Administrator');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        {/* <h1>ACCOUNT LOGIN</h1> */}
        <form className='login__container--form' onSubmit={handleSubmit}>
          <div className='form'>
            <h1>Account Login</h1>
            <div className='group'>
              <input
                name='email'
                type='email'
                onChange={handleInput}
                required
              />
              <span className='barra'> </span>
              <label htmlFor=''>Email</label>
            </div>
            <div className='group'>
              <input
                name='password'
                type='password'
                onChange={handleInput}
                required
              />
              <span className='barra'> </span>
              <label htmlFor=''>Password</label>
            </div>
            <button type='submit'>Iniciar sesión</button>
            <div className='forgot group'>
              <p>¿Olvidaste la contraseña?</p>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(Login));


