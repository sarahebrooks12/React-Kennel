import React, { Component } from "react";
import { Link } from "react-router-dom";

// keyword THIS referring to component - refers to whatever component you are currently inside of props
class AnimalCard extends Component {
  render() {
    console.log("this is this.props", this.props);
    console.log("this is this.props.animalProp", this.props.animalProp);
    // props (object) come from somewhere else --- react tools to decide what user sees
    // is like a parameter but you must keep name throughout the app
    // whatever name in parent component has to be named that in child component
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture>
          <h3>
            Name:{" "}
            <span className="card-petName">{this.props.animalProp.name}</span>
          </h3>
          <p>Breed: {this.props.animalProp.breed}</p>
          <button
            type="button"
            onClick={() => this.props.deleteAnimal(this.props.animalProp.id)}>
            Discharge
          </button>
          <Link to={`/animals/${this.props.animalProp.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
