import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 41.390205,
            lng: 2.154007
          }}
          zoom={12}
        >
          <Marker
            onClick={() => console.log('marker clicked')}
            title={'Barcelona, Spain'}
            name={'Barcelona, Spain'}
            position={{lat: 41.390205, lng: 2.154007}}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'process.env.GOOGLE_MAPS_API_KEY'
})(MapContainer);