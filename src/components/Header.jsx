import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo_azul.png';
import userIcon from '../assets/static/user-icon.svg';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__img--logo-zinobe'
          src={logo}
          alt='Logo zinobe'
        />
      </Link>
      <div className='header_menu'>
        <div className='header_menu_profile'>
          {/* validacion si hay usuario */}
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt='Img perfil' />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {/* validacion de nombre del usuario logeado */}
          {hasUser ? (
            <li>
              <Link to=' '>{user.name}</Link>
            </li>
          ) : null}

          {/* validacion de login y logout */}
          {hasUser ? (
            <li>
              <a href='#logout' onClick={handleLogout}>
                Cerrar sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
