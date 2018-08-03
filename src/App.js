import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Mappage from './components/screens/mappage';
import TrackMap from './components/screens/TrackMap';
import QRscan from './components/screens/QRscan';
import firstpage from './components/screens/firstpage';
import Profile from './components/screens/Profile';
import Notificationpage from './components/screens/Notificationpage';

import './fire';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/Map" component={Mappage} />
        <Route path="/track" component={TrackMap} />
        <Route path="/QRscan" component={QRscan} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Notificationpage" component={Notificationpage} />
        <Route path="/" component={firstpage} />
        </Switch>
      </div>
    );
  }
}

export default App;
