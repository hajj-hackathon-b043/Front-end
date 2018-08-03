import React, { Component } from 'react';
import './screens.css';
import Map from './Map';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Mappage extends Component {
  render() {
    return (
      <div className="mappagecontainer">
        <div className="nav">
          <AppBar position="static" style={{ backgroundColor: '#f1f1f1', color: '#fff' }}>
            <Toolbar>
              <Typography variant="title" style={{ color: '#000' }}>
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <Map />
      </div>
    );
  }
}

export default Mappage;
