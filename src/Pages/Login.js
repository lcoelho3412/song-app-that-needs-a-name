import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <section data-testid="page-login">
        <form>
          <input
            type="text"
            name="input-name"
            placeholder="Digite seu Login"
          />
          <button
            type="submit"
          >
            Login
          </button>

        </form>
      </section>
    );
  }
}

export default Login;
