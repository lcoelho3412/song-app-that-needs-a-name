import React, { Component } from 'react';
import Header from '../Components/Header';

class Favorites extends Component {
  render() {
    return (
      <>
        <Header />
        <section data-testid="page-favorites">
          <p>Favorites.</p>
        </section>
      </>
    );
  }
}

export default Favorites;
