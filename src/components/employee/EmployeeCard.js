import React, { Component } from "react";
// import './Kennel.css';

class EmployeeCard extends Component {
  render() {
    return (
      <div class="container-main">
        <div class="section-content">
          <h2>
            <small>{this.props.employeeProp.name}</small>
          </h2>
          <button type="button" onClick={() => this.props.fireEmployee(this.props.employeeProp.id)}>Bye Felicia</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;