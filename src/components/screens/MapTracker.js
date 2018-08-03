import React, {Component} from 'react';
import './screens.css';
import GoogleMapReact from 'google-map-react';
import {FaWalking} from 'react-icons/fa';
import io from 'socket.io-client';

const api = 'AIzaSyAx3lbC838VZVnuCfEO2QMBb5eeJ7LY4-I';
const Marker = ({props}) => {
    return (
        <h1>
            <FaWalking/>
        </h1>
    );
};

class MapTracker extends Component {
    static defaultProps = {
        center: {
            lat: 37.39081987,
            lng: -122.1652427
        },
        zoom: 14
    };

    state = {
        marker: {
            lat: 37.39081987,
            lng: -122.1652427
        }
    };

    componentDidMount() {
        const socket = io('https://desolate-caverns-43961.herokuapp.com/');
        // const socket = io('http://localhost:3000');
        const self = this;
        socket.on('locations', function (locations) {
            console.log(locations);

            locations = locations || [];
            self.setState({
                marker: {
                    lat: locations[0].latitude,
                    lng: locations[0].longitude,
                }
            })
        });
    }

    render() {
        const {marker} = this.state;
        return (
            <GoogleMapReact
                bootstrapURLKeys={{key: api}}
                center={this.state.marker}
                defaultZoom={this.props.zoom}
            >
                <Marker lat={marker.lat} lng={marker.lng}/>
            </GoogleMapReact>
        );
    }
}

export default MapTracker;

//AIzaSyAx3lbC838VZVnuCfEO2QMBb5eeJ7LY4-I
