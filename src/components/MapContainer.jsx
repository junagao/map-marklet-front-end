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
    fetch(`http://localhost:1234/${this.props.user}`)
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
    if (this.state.markers) {
      let points = [];
      this.state.markers.map((marker) => {
        return points.push(marker.latLng);
      });
      const bounds = new this.props.google.maps.LatLngBounds();
      points.map((latLng) => bounds.extend(latLng));

    return (
      <div>
        <Map
          google={this.props.google}
          bounds={bounds}
          initialCenter={{lat: 41.438722, lng: 2.012628}}
          zoom={11}
          setAutoZoom="true">
          {this.state.markers.map((marker) => {
            return (
              <Marker
              position={marker.latLng}
              title={marker.title}
              key={Math.round(Math.random() * 10000 + 1)}
              onClick={this.onMarkerClick}
              tags={marker.tags.map((tag) => tag.id)}
              pic={marker.pic}
              url={marker.url}
            />
            );
            }
          )}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.infoWindowVisibility}
          >
            <div className="infowindow-container">
              <a href={this.state.selectedMarker.url} target="_blank">
                <h2>{this.state.selectedMarker.title}</h2>
              </a>
              <small>{this.state.selectedMarker.tags && this.state.selectedMarker.tags.join(', ')}</small>
              <div>
                <img src={this.state.selectedMarker.pic} alt='' width='200' />
              </div>
            </div>
          </InfoWindow>

          <TagFilters markers={this.state.markers} />

        </Map>
      </div>
    );
  }
  }
}

export default GoogleApiWrapper({
  apiKey: 'process.env.GOOGLE_MAPS_API_KEY'
})(MapContainer);