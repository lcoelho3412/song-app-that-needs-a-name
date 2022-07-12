import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loadingScreen: false,
    };
  }

  componentDidMount() {
    console.log('MusicCard');
  }

onCheckBoxChange = async (trackId) => {
  this.setState({ loadingScreen: true });
  await addSong(trackId);
  await getFavoriteSongs();
  this.setState({ loadingScreen: false });
}

render() {
  const { loadingScreen } = this.state;
  const { trackId, artist, song, trackName } = this.props;
  return (
    <>
      {loadingScreen && <Loading />}
      <div
        key={ trackId }
        music={ song }
      >
        <audio data-testid="audio-component" src="{previewUrl}" controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <p>{ artist }</p>
        <ul>
          <li>
            { trackName }
          </li>
        </ul>
      </div>
      <label htmlFor={ trackId }>
        <input
          id={ trackId }
          type="checkbox"
          data-testid={ `checkbox-music-${trackId}` }
          onChange={ () => this.onCheckBoxChange(trackId) }
        />
        Favorita
      </label>

    </>
  );
}
}

MusicCard.propTypes = {
  trackId: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
};

export default MusicCard;
