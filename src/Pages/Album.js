import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],
      artist: '',
      collection: '',
      image: '',
    };
  }

  componentDidMount() {
    this.requisition();
  }

  requisition = async () => {
    const { match: { params: { id } } } = this.props;
    const artistSong = await getMusics(id);
    console.log(artistSong);
    this.setState({
      artist: artistSong[0].artistName,
      collection: artistSong[0].collectionName,
      music: artistSong.filter((item) => item.kind === 'song'),
      image: artistSong[0].artworkUrl100,
    });
  }

  render() {
    const { artist, collection, music, image } = this.state;
    console.log({ music });
    return (
      <>
        <Header />
        <section data-testid="page-album">
          <br />
          <img src={ image } alt="imagem do album que esta tocando." />
          <br />
          <h2 data-testid="artist-name">{artist}</h2>
          <h4 data-testid="album-name">{collection}</h4>
          {music.map((song) => (
            <div
              key={ song.trackId }
              music={ song }
              data-testid="audio-component"
            >
              <p>{song.artist}</p>
              <ul>
                <li>
                  { song.trackName }
                </li>
              </ul>
            </div>

          ))}
        </section>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default Album;
