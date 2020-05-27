import React, { Component } from "react";
// import './Kennel.css';

class EmployeeCard extends Component {
  render() {
    return (
      <div class="container-main">
        <div class="section-content">
          <h2>
            Employees
            <br />
            <small>Jordan Castalloe</small>
            <br />
            <small>Tommy Spurlock</small>
            <br />
            <small>Sarah Brooks</small>
          </h2>
        </div>
        <div class="container-cards">
        </div>
      </div>
    );
  }
}

export default EmployeeCard;