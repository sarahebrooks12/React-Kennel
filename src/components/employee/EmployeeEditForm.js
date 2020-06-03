import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
//new routing 
    updateExistingEmployee = evt => {
        //prevent refresh of page
      evt.preventDefault()
      //disable the button - can't keep clicking submit
      this.setState({ loadingStatus: true });
      //object that is going to database
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.employeeName
      };
//send newly edited animal to API manager then reroute to /employees
      EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
      EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
          this.setState({
            employeeName: employee.name,
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
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee name</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm