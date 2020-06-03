import React, { Component } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"

class AnimalEditForm extends Component {
    //set the initial state
    state = {
      animalName: "",
      breed: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
//new routing 
    updateExistingAnimal = evt => {
        //prevent refresh of page
      evt.preventDefault()
      //disable the button - can't keep clicking submit
      this.setState({ loadingStatus: true });
      //object that is going to database
      const editedAnimal = {
        id: this.props.match.params.animalId,
        name: this.state.animalName,
        breed: this.state.breed
      };
//send newly edited animal to API manager then reroute to /animals
      AnimalManager.update(editedAnimal)
      .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
      AnimalManager.get(this.props.match.params.animalId)
      .then(animal => {
          this.setState({
            animalName: animal.name,
            breed: animal.breed,
            loadingStatus: false,
          });
      });
    }
// value = pre populated data that the user sees
    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default AnimalEditForm