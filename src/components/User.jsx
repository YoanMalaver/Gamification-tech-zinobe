import React from 'react';
import userIcon from '../assets/static/user-icon.svg';
import '../assets/styles/components/User.scss';
import Graphics from '../containers/Graphics';

const User = () => (
  <>
    <section className='user'>
      <section className='user__container'>
        <div className='badge__section-name'>
          <img className='badge__avatar' src={userIcon} alt='Avatar' />
          <p>Editar perfil</p>
        </div>

        <div className='badge__section-info'>
          <h1 className=''>Nozomi Nara</h1>
          <h3>Frontend Engineer</h3>
          <h3>Equipo</h3>
        </div>
        <div className='badge__section-info'>
          <h2>745</h2>
          <p>Puntos</p>
        </div>
      </section>
      <Graphics />
    </section>
  </>
);

export default User;
