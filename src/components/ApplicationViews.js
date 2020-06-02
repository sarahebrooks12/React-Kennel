import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./locations/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import LocationDetail from "./locations/LocationDetail";
import OwnerDetail from "./owner/OwnerDetail";
import LocationForm from "./locations/LocationForm";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerForm from "./owner/OwnerForm";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home />;
          }}
        />
        
       {/* ANIMALS */}

        <Route
          exact
          path="/animals"
          render={(props) => {
            return <AnimalList {...props}/>;
          }}
        />
         <Route
          path="/animals/:animalId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
            );
          }}
        />
          <Route
          path="/animals/new"
          render={(props) => {
            return <AnimalForm {...props}/>;
          }}
        />

        {/* LOCATIONS */}

        <Route
          exact
          path="/locations"
          render={(props) => {
            return <LocationList {...props}/>;
          }}
        />
          <Route
          path="/locations/:locationId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)} {...props}
              />
            );
          }}
         />
             <Route
          path="/locations/new"
          render={(props) => {
            return <LocationForm {...props}/>;
          }}
        />

        {/* EMPLOYEES */}

        <Route
          exact
          path="/employees"
          render={(props) => {
            return <EmployeeList {...props}/>;
          }}
        />
            <Route
          path="/employees/:employeeId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)} {...props}
              />
            );
          }}
        />
             <Route
          path="/employees/new"
          render={(props) => {
            return <EmployeeForm {...props}/>;
          }}
        />

        {/* OWNERS */}

        <Route
          exact
          path="/owners"
          render={(props) => {
            return <OwnerList {...props}/>;
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props}/>
            );
          }}
        />
             <Route
          path="/owners/new"
          render={(props) => {
            return <OwnerForm {...props}/>;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
