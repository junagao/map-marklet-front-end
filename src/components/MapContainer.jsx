import React, { Component} from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {

  state =  {
    markers: [
      {
        place: 'Badalona',
        position: {
          lat: 41.446988,
          lng: 2.245032
        },
        tags: ["badalona"]
      },
      {
        place: 'Barcelona Airport',
        position: {
          lat: 41.297445,
          lng: 2.083294
        },
        tags: ["airport"]
      },
      {
        place: 'El Papiol',
        position: {
          lat: 41.438722,
          lng: 2.012628
        },
        tags: ["elpapiol"]
      }
    ],
    infoWindowVisibility: false,
    activeMarker: {},
    selectedMarker: {}
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedMarker: props,
      activeMarker: marker,
      infoWindowVisibility: true
    });
  }

  render() {
    return (
      <div>
        <Map google={this.props.google} initialCenter={{lat: 41.438722, lng: 2.012628}} zoom={11}>

          {this.state.markers.map((marker) => {
            return (
              <Marker
              position={marker.position}
              title={marker.place}
              key={Math.round(Math.random() * 10000 + 1)}
              onClick={this.onMarkerClick}
            />
            );
            }
          )}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.infoWindowVisibility}
          >
            <h2>{this.state.selectedMarker.title}</h2>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'process.env.GOOGLE_MAPS_API_KEY'
})(MapContainer);