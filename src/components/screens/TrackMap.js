import React, { Component } from 'react';
import './screens.css';
import MapTracker from './MapTracker';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FaArrowLeft } from 'react-icons/fa';

class TrackMap extends Component {
  render() {
    return (
      <div className="mappagecontainer">
          <div className="nav">
              <AppBar position="static" style={{ backgroundColor: '#f1f1f1', color: '#fff' }}>
                  <Toolbar>
                      <Typography variant="title" style={{ color: '#000' }}>
                        <FaArrowLeft onClick={() => this.props.history.push('/Profile')} />
                      </Typography>
                  </Toolbar>
              </AppBar>
          </div>
          <MapTracker />
      </div>
    );
  }
}

export default TrackMap;
