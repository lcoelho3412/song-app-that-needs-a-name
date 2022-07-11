import React, { Component } from 'react';
import Header from '../Components/Header';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      isButtonDisabled: true,
    };
  }

  searchMatchRequirements = (event) => {
    const minCharacters = 2;
    if (event.target.value.length >= minCharacters) {
      this.setState({
        isButtonDisabled: false,
        searchInput: event.target.value,
      });
    }
  }

  render() {
    const { isButtonDisabled } = this.state;
    console.log(this.state);
    return (
      <>
        <Header />
        <div data-testid="page-search" />
        <form>
          <input
            className="search-artist-input"
            type="text"
            name="search-artist-input"
            data-testid="search-artist-input"
            placeholder="Nome "
            onChange={ this.searchMatchRequirements }
          />
          <button
            className="search-artist-button"
            name="search-artist-button"
            type="submit"
            data-testid="search-artist-button"
            disabled={ isButtonDisabled }
          >
            Pesquisar
          </button>
        </form>
      </>
    );
  }
}

export default Search;
