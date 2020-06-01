import React, { Component } from "react";
// import './Kennel.css';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div class="container-main">
        <div class="section-content">          
          <h4>
            <br />
            Visit Us at the {this.props.locationProp.name}           
            <br />
            {this.props.locationProp.address}
          </h4>
          <button type="button" onClick={() => this.props.closeLocation(this.props.locationProp.id)}>Close it down</button>
          <Link to={`/locations/${this.props.locationProp.id}`}>
            <button>Details</button>
          </Link>
        </div>
        </div>
    );
  }
}

export default LocationCard;