import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MapContainer from './components/MapContainer.jsx';

class App extends Component {

  renderMapContainer = (user) => {
    const currentUser = user.match.params.user
    // console.log('tags: ',user.location.search.split(/[?+]/).splice(1))
    if(currentUser) {
      return <MapContainer user={currentUser} />;
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/:user" render={this.renderMapContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
