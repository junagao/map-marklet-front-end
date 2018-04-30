import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export class MapContainer extends Component {

  state =  {
    markers: [
      {
        place: 'Badalona',
        position: {
          lat: 41.446988,
          lng: 2.245032
        }
      },
      {
        place: 'Barcelona Airport',
        position: {
          lat: 41.297445,
          lng: 2.083294
        }
      },
      {
        place: 'El Papiol',
        position: {
          lat: 41.438722,
          lng: 2.012628
        }
      }
    ]
  }

  render() {
    return (
      <div>
        <Map google={this.props.google} initialCenter={{lat: 41.438722, lng: 2.012628}} zoom={12}>
          {this.state.markers.map((marker) => <Marker position={marker.position} title={marker.place} key={Math.round(Math.random() * 10000 + 1)} />)}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'process.env.GOOGLE_MAPS_API_KEY'
})(MapContainer);