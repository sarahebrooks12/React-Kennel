import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      address: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
//new routing 
    updateExistingLocation = evt => {
        //prevent refresh of page
      evt.preventDefault()
      //disable the button - can't keep clicking submit
      this.setState({ loadingStatus: true });
      //object that is going to database
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.locationName,
        address: this.state.locationAddress
      };
//send newly edited animal to API manager then reroute to /employees
      LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
      LocationManager.get(this.props.match.params.locationId)
      .then(location => {
          this.setState({
            locationName: location.name,
            locationAddress: location.address,
            loadingStatus: false
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
                id="locationName"
                value={this.state.locationName}
              />
              <label htmlFor="locationName">Location name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="locationAddress"
                value={this.state.locationAddress}
              />
              <label htmlFor="locationAddress">Location Address</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default LocationEditForm