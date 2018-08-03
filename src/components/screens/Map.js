import React, { Component } from 'react';
import './screens.css';
import GoogleMapReact from 'google-map-react';
import { FaWalking } from 'react-icons/fa';

const api = 'AIzaSyAx3lbC838VZVnuCfEO2QMBb5eeJ7LY4-I';
const Marker = ({ props }) => {
  return (
    <h1>
      <FaWalking />
    </h1>
  );
};

class Map extends Component {
  static defaultProps = {
    center: {
      lng: 39.1563971,
      lat: 21.616973
    },
    zoom: 18.5,
    false: false,
    rotateControl: true,
    tilt: 45
  };
  render() {
    return (
      <div className="mapcontainer">
        <div className="mapgrid">
          <GoogleMapReact
            bootstrapURLKeys={{ key: api }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            draggable={this.props.false}
            zoomControl={this.props.false}
            mapTypeControl={this.props.false}
            scaleControl={this.props.false}
            streetViewControl={this.props.false}
            fullscreenControl={this.props.false}>
            <Marker lat={21.616812} lng={39.156437} />
          </GoogleMapReact>
          <div className="user">
            <div className="room">
              <div className="stage">
                <br />
                <br />
                <br />
                <p>Stage</p>
              </div>
              <div className="main-entrence">entrence</div>
              <div className="foodandmore">
                <br />
                <br />
                Food<br />somke<br />rest
              </div>
              <div className="A">
                <p>A</p>
              </div>
              <div className="B">
                <p>B</p>
              </div>
              <div className="C">
                <p>C</p>
              </div>
              <div className="D">
                <p>D</p>
              </div>
              <div className="E">
                <p>E</p>
              </div>
              <div className="F">
                <p>F</p>
              </div>
              <div className="G">
                <p>G</p>
              </div>
              <div className="H">
                <p>H</p>
              </div>
              <div className="I">
                <p>I</p>
              </div>

              <div className="J">
                <p>I</p>
              </div>

              <div className="K">
                <p>J</p>
              </div>

              <div className="L">
                <p>L</p>
              </div>

              <div className="M">
                <p>M</p>
              </div>

              <div className="N">
                <p>N</p>
              </div>

              <div className="O">
                <p>O</p>
              </div>

              <div className="P">
                <p>P</p>
              </div>

              <div className="Q">
                <p>Q</p>
              </div>

              <div className="R">
                <p>R</p>
              </div>
              <div className="M-Wc">
                <p>Male WC</p>
              </div>
              <div className="W-Wc">
                <p>FemaleWC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;

//AIzaSyAx3lbC838VZVnuCfEO2QMBb5eeJ7LY4-I
