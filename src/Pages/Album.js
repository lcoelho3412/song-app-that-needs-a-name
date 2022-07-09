import React, { Component } from 'react';
import Header from '../Components/Header';

class Album extends Component {
  render() {
    return (
      <>
        <Header />
        <section data-testid="page-album">
          <p>Album</p>
        </section>
      </>
    );
  }
}

export default Album;
