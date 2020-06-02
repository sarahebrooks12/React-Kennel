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
import AnimalForm from "./animal/AnimalForm"

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
        <Route
          exact
          path="/animals"
          render={(props) => {
            return <AnimalList {...props}/>;
          }}
        />
        <Route
          exact
          path="/locations"
          render={(props) => {
            return <LocationList />;
          }}
        />
        <Route
          exact
          path="/employees"
          render={(props) => {
            return <EmployeeList />;
          }}
        />
        <Route
          exact
          path="/owners"
          render={(props) => {
            return <OwnerList />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
            );
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
              />
            );
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
              />
            );
          }}
         />
        <Route
          path="/owners/:ownerId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent --- \d+ has to be a digit
            return (
              <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
            );
          }}
        />
        {/* shiny new path */}
        <Route
          path="/animals/new"
          render={(props) => {
            return <AnimalForm {...props}/>;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
