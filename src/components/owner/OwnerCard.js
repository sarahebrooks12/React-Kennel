import React, { Component } from "react";
// import './Kennel.css';

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
        </div>
      </div>
    );
  }
}

export default OwnerCard;
