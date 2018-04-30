import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MapContainer from './components/MapContainer.jsx';

class App extends Component {

  renderMapContainer = (user) => {
    console.log('user: ', user.match.params.user)
    console.log('tags: ',user.location.search.split(/[?+]/).splice(1))
    return <MapContainer />;
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/barcelona/:user" render={this.renderMapContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
