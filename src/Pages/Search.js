import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      isButtonDisabled: true,
      loadingScreen: false,
      searchResults: [],
      notFound: false,
      name: '',
    };
  }

  searchResults = (event) => {
    const minCharacters = 2;
    if (event.target.value.length >= minCharacters) {
      this.setState({
        isButtonDisabled: false,
        searchInput: event.target.value,
      });
    }
  }

  fetchAlbumAPI = async () => {
    const { searchInput } = this.state;
    this.setState({ loadingScreen: true });
    const holdResultFromSearch = await searchAlbumsAPI(searchInput);
    if (holdResultFromSearch.length === 0) {
      this.setState({
        notFound: true,
      });
    }
    this.setState({
      loadingScreen: false,
      searchResults: holdResultFromSearch,
      searchInput: '',
      name: searchInput,
    });
  };

  render() {
    const {
      isButtonDisabled,
      searchResults,
      loadingScreen,
      name,
      notFound } = this.state;
    console.log(this.state);
    return (
      <>
        <Header />
        <div data-testid="page-search" />
        {loadingScreen ? <Loading /> : (
          <form>
            <input
              className="search-artist-input"
              type="text"
              name="search-artist-input"
              data-testid="search-artist-input"
              placeholder="Nome "
              onChange={ this.searchResults }
            />
            <button
              className="search-artist-button"
              name="search-artist-button"
              type="submit"
              data-testid="search-artist-button"
              disabled={ isButtonDisabled }
              onClick={ this.fetchAlbumAPI }
            >
              Pesquisar
            </button>
          </form>
        )}
        {
          notFound && <p>Nenhum álbum foi encontrado</p>
        }
        {
          loadingScreen ? <Loading />
            : (
              <div>
                <p>
                  {`Resultado de álbuns de: 
                  ${name}`}
                </p>
                {searchResults.map((artist, index) => (
                  <div key={ index }>
                    <p>{artist.colectionName}</p>
                    <Link
                      to={ `/album/${artist.collectionId}` }
                      data-testid={ `link-to-album-${artist.collectionId}` }
                    >
                      {artist.collectionName}
                    </Link>
                  </div>
                ))}
              </div>
            )
        }
      </>
    );
  }
}

export default Search;
