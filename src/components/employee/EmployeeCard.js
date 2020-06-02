import React, { Component } from "react";
// import './Kennel.css';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div class="container-main">
        <div class="section-content">
          <h2>
            <small>{this.props.employeeProp.name}</small>
          </h2>
          <Link to={`/employees/${this.props.employeeProp.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;