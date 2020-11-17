import React from 'react';
import '../assets/styles/components/Admin.scss';
import boxIcon from '../assets/static/Empty_Box.svg';
import routeUserIcon from '../assets/static/Win.svg';
import dataUserIcon from '../assets/static/Sign_Up.svg';

const Admin = () => (
  <section className='products'>
    <div className='product fadeInUp'>
      <div className='content'>
        <div className='image_content'>
          <img src={dataUserIcon} alt='' />
        </div>
        <h1>Seccion Usuarios</h1>
        <p>Description</p>
        <button type='button' className='main_bottom'>
          Ir a la Sección
        </button>
      </div>
    </div>
    <div className='product fadeInUp'>
      <div className='content'>
        <div className='image_content'>
          <img src={routeUserIcon} alt='' />
        </div>
        <h1>Rutas de crecimiento</h1>
        <p>Description</p>
        <button type='button' className='main_bottom'>
          Ir a la Sección
        </button>
      </div>
    </div>
    <div className='product fadeInUp'>
      <div className='content'>
        <div className='image_content'>
          <img src={boxIcon} alt='' />
        </div>
        <h1>Seccion Gamification</h1>
        <p>Description</p>
        <button type='button' className='main_bottom'>
          Ir a la Sección
        </button>
      </div>
    </div>
  </section>
);

export default Admin;
