import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'


class OwnerForm extends Component {
    state = {
        name: "",
        phoneNumber: "",
        loadingStatus: false,
    };
// create information --- grab information user is entering and changing state in that component
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewOwner = evt => {
        //this stops from loading on page load
        evt.preventDefault();
        if (this.state.name === "" || this.state.phoneNumber === "") {
            window.alert("Please input a name and phone number");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
            };

            // Create the animal and redirect user to animal list
            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owners"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Owner's Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phoneNumber"
                        placeholder="Phone Number"
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm