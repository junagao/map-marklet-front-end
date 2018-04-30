import React, { Component} from 'react';
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
    ],
    baseUrl: "https://www.google.com",
    searchQuery: "/search?source=hp&ei=NdXmWsnEF4iPmwX755bwDw&q=pc+gamer&oq=pc+gamer&gs_l=psy-ab.3..0l3j0i203k1l4j0l3.16432.17381.0.17563.11.9.0.0.0.0.103.742.5j3.9.0....0...1c.1.64.psy-ab..2.9.849.6..46j35i39k1j0i67k1j0i46k1.108.XIrXUiiXmPM"
  }

  render() {
    return (
      <div>
        <Map google={this.props.google} initialCenter={{lat: 41.438722, lng: 2.012628}} zoom={11}>
          {this.state.markers.map((marker) => <Marker position={marker.position} title={marker.place} key={Math.round(Math.random() * 10000 + 1)} />)}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC6xXldmd60eN7osRK0BPQjoCsMKYo0eiI'
})(MapContainer);