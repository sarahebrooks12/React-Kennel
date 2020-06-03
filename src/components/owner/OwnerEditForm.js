import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"
import "./OwnerForm.css"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      phoneNumber: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
//new routing 
    updateExistingOwner = evt => {
        //prevent refresh of page
      evt.preventDefault()
      //disable the button - can't keep clicking submit
      this.setState({ loadingStatus: true });
      //object that is going to database
      const editedOwner = {
        id: this.props.match.params.ownerId,
        name: this.state.ownerName,
        address: this.state.ownerPhoneNumber
      };
//send newly edited animal to API manager then reroute to /employees
      OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
      OwnerManager.get(this.props.match.params.ownerId)
      .then(owner => {
          this.setState({
            ownerName: owner.name,
            ownerPhoneNumber: owner.phoneNumber,
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
                id="ownerName"
                value={this.state.ownerName}
              />
              <label htmlFor="ownerName">Owner name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerPhoneNumber"
                value={this.state.ownerPhoneNumber}
              />
              <label htmlFor="ownerAddress">Owner Phone Number</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default OwnerEditForm