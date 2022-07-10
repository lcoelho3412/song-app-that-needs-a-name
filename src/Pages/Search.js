import React, { Component } from 'react';
import Header from '../Components/Header';

class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <p>Search</p>
        </div>
      </>
    );
  }
}

export default Search;
