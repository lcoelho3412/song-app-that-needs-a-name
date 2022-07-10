import React, { Component } from 'react';
import Header from '../Components/Header';

class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile">
          <p>Profile</p>
        </div>
      </>
    );
  }
}

export default Profile;
