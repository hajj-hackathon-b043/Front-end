import React, { Component } from 'react';
import './screens.css';
import QrReader from 'react-qr-reader';
import Button from '@material-ui/core/Button';

class QRscan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result'
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div className="QRscan">
        <QrReader delay={this.state.delay} onError={this.handleError} onScan={this.handleScan} className="Camera" />
        <p>{this.state.result}</p>

        <Button variant="contained">Done</Button>
      </div>
    );
  }
}

export default QRscan;
