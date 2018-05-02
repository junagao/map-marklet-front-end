import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';
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
          <IconButton
            onClick={this.handleToggle}
            style={styles}
          >
            <ContentFilterList />
          </IconButton>
          <Drawer open={this.state.open}>
            <RaisedButton
              label="Hide"
              secondary={true}
              style={styles}
              icon={<NavigationClose />}
              onClick={this.handleToggle}
            />
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
  marginLeft: 15,
  backgroundColor: 'rgb(255, 221, 2)'
};