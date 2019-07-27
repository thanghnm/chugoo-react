import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const divStyle = {
  color: 'blue',
};

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div style = {divStyle}>
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
         lat: -27.4698,
         lng: 153.0251
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBI8tarrpcOhF-4uNO5_KJKfdbZYlk__a8'
})(MapContainer);
