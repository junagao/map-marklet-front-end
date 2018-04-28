import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    infoWindowVisibility : false,
    activeMarker : {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      infoWindowVisibility: true
    })
  }

  onMapClicked = (props) => {
    if (this.state.infoWindowVisibility) {
      this.setState({
        infoWindowVisibility: false,
        activeMarker: null
      })
    }
  }

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
          onClick={this.onMapClicked}
          onReady={this.fetchPlaces}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={'Barcelona, Spain'}
            name={'Barcelona, Spain'}
            position={{lat: 41.390205, lng: 2.154007}}
          />
          <InfoWindow
            marker = {this.state.activeMarker}
            visible = {this.state.infoWindowVisibility}
          >
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
              <img src="https://d15gqlu8dfiqiu.cloudfront.net/s3fs-public/styles/banner/public/images/chapters/Barcelona_travel_massive.jpg" alt="" width="300" height="250" />
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC6xXldmd60eN7osRK0BPQjoCsMKYo0eiI'
})(MapContainer);