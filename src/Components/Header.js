import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loadingScreen: false,
      userName: '',
    };
  }

  componentDidMount() {
    this.waitAPI();
  }

  waitAPI = async () => {
    this.setState({ loadingScreen: true });
    const userName = await getUser();
    this.setState({ loadingScreen: false });
    this.setState({ userName: userName.name });
  }

  render() {
    const { loadingScreen, userName } = this.state;
    if (loadingScreen) return <Loading />;
    return (
      <header className="header" data-testid="header-component">
        <p data-testid="header-user-name">
          {`Olá ${userName}`}
        </p>
        <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
        <Link data-testid="link-to-favorites" to="/favorites">favoritas</Link>
        <Link data-testid="link-to-profile" to="/profile">perfil</Link>
      </header>
    );
  }
}

export default Header;
