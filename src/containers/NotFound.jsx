import React from 'react';
import { Link } from 'react-router-dom';
import ImgNotFound from '../assets/static/404 Error-bro.png';
import '../assets/styles/components/NotFound.css';
const NotFound = () => (
  <>
    <section className='container__not'>
      <span>
        <Link to='/dashboardadmin'>
          <p>Go Home</p>
        </Link>
      </span>
      <img src={ImgNotFound} alt='' />
    </section>
  </>
);

export default NotFound;
