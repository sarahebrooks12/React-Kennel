import React, { Component } from "react";
//import the components we will need
// import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import ResourceCard from "../reusables/ResourceCard";

class EmployeeList extends Component {
  //define what this component needs to render
  // state is where JSON can be stored instead of fetching over and over - virtual DOM
  // start with an empty array - first time it runs looping over something empty
  // this what users see --- .innerHTML
  state = {
    employees: [],
  };
  // fetch call sets state - import the components we will need instead of multiple fetch calls
  componentDidMount() {
    // console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll().then((employees) => {
      // console.log(employees)
      this.setState({
        employees: employees,
      });
    });
  }

  render() {
    // console.log("ANIMAL LIST: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/employees/new");
            }}
          >
            Add Employee
          </button>
        </section>
        <div className="container-cards">
          {/* forEach doesn't return - map returns a component to render JSX */}
          {this.state.employees.map((currentEmployeeInLoop) => {
            // console.log("This is a current Employee in the loop", currentEmployeeInLoop)
            // render an Employee card with current Employee in loop
            return (
              <ResourceCard
                key={currentEmployeeInLoop.id}
                resource={currentEmployeeInLoop}
                resourceName="employees"
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default EmployeeList;
