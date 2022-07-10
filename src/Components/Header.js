import React, { Component } from 'react';
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
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          {`Olá ${userName}`}
        </p>
      </header>
    );
  }
}

export default Header;
