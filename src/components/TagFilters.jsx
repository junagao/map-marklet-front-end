import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class TagFilters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton
            style={styles}
            label="Filter"
            onClick={this.handleToggle}
          />
          <Drawer open={this.state.open}>
            <MenuItem>Barcelona</MenuItem>
            <MenuItem>Spain</MenuItem>
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