import React, { Component } from "react";
// import './Kennel.css';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div class="container-main">
        <div class="section-content">
          <h2>
            <br />
            <small>{this.props.ownerProp.name}</small>
          </h2>
          <button type="button" onClick={() => this.props.removeOwner(this.props.ownerProp.id)}>See ya later</button>
          <Link to={`/owners/${this.props.ownerProp.id}`}>
            <button>Details</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
