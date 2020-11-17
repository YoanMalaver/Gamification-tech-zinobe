import React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <section>
    <div>
      <p>Hola Hola</p>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, null)(Home);
