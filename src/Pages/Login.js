import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      isActive: true,
      loadingScreen: false,
      loaded: false,
    };
  }

  saveUser = (event) => {
    const min = 3;
    if (event.target.value.length >= min) {
      this.setState({
        isActive: false,
        userName: event.target.value,
      });
    }
  }

  login = async (event) => {
    event.preventDefault();
    const { userName } = this.state;
    this.setState({ loadingScreen: true });
    await createUser({ name: userName });
    this.setState({ loadingScreen: false, loaded: true });
  }

  render() {
    const { isActive, loadingScreen, loaded } = this.state;
    return (
      <section className="login-page" data-testid="page-login">

        {loadingScreen && <Loading />}
        {loaded && <Redirect to="/search" />}
        <form>
          <input
            className="input-name"
            type="text"
            name="input-name"
            data-testid="login-name-input"
            placeholder="Digite seu Login"
            onChange={ this.saveUser }
          />
          <button
            className="input-btn"
            name="login-btn"
            type="submit"
            data-testid="login-submit-button"
            disabled={ isActive }
            onClick={ this.login }
          >

            Entrar

          </button>

        </form>
      </section>
    );
  }
}

export default Login;
