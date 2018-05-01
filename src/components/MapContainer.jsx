import React, { Component} from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import '../styles/MapContainer.css';
import TagFilters from './TagFilters.jsx';

export class MapContainer extends Component {

  state =  {
    markers: [],
    infoWindowVisibility: false,
    activeMarker: {},
    selectedMarker: {}
  }

  componentDidMount(props) {
    fetch(`http://192.168.1.229:1234/${this.props.user}`)
      .then(res => res.json())
      .then(res => this.setState({ markers: res.markers }))
      .catch(error => console.log(error))
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedMarker: props,
      activeMarker: marker,
      infoWindowVisibility: true
    });
  }

  render() {
    if (!this.state.marker) {
    return (
      <div>
        <Map google={this.props.google} initialCenter={{lat: 41.438722, lng: 2.012628}} zoom={11}>
          {this.state.markers.map((marker) => {
            return (
              <Marker
              position={marker.latLng}
              title={marker.title}
              key={Math.round(Math.random() * 10000 + 1)}
              onClick={this.onMarkerClick}
              tags={marker.tags}
              pic={marker.pic}
            />
            );
            }
          )}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.infoWindowVisibility}
          >
            <div className="infowindow-container">
              <h2>{this.state.selectedMarker.title}</h2>
              <div>
                <img src={this.state.selectedMarker.pic} alt='' width='200' />
              </div>
            </div>
          </InfoWindow>


          <TagFilters markers={this.state.markers} />

        </Map>
      </div>
    );}
  }
}

export default GoogleApiWrapper({
  apiKey: 'process.env.GOOGLE_MAPS_API_KEY'
})(MapContainer);