import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import Search from './Pages/Search';

class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/search" component={ Search } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
