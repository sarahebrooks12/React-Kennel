import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      address: ""
  }

  componentDidMount(){
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>{this.state.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;