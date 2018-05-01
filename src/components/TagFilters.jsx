import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class TagFilters extends React.Component {
  state = {
    open: false,
    tags: []
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const markers = this.props.markers;
    let allTags = [];
    if (markers.length > 0) {
      markers.map((marker) => {
        return marker.tags.map((tag) => {
          return allTags.push(tag);
        });
      });
    }
    const uniq = (allTags) => {
      return allTags.sort().filter((item, pos, arr) => {
        return !pos || item !== arr[pos - 1];
      })
    }

    return (

      <MuiThemeProvider>
        <div>
          <RaisedButton
            style={styles}
            label="Filter"
            onClick={this.handleToggle}
          />
          <Drawer open={this.state.open}>
          {uniq(allTags).map((tag) => {
            return (
              <MenuItem key={Math.round(Math.random() * 10000 + 1)}>
                {tag}
              </MenuItem>
              );
          })}
          </Drawer>
        </div>
      </MuiThemeProvider>

    );
  }
}

const styles = {
  borderRadius: 3,
  border: 0,
  boxShadow: '0 3px 5px 2px rgba(56, 58, 61, .30)',
  marginTop: 50,
  marginLeft: 15
};