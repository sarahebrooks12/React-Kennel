import React, { Component } from "react";
import './Kennel.css';
import NavBar from './nav/NavBar'
import ApplicationViews from "./ApplicationViews";

//class is another way of writing javascript object
//render method inside of class - returning JSX
//return should only be JSX - console log outside

// react fragment <> </> instead of div --- doesn't create extra div lets us return just one thing
class Kennel extends Component {
  // kennelName = "Student Kennels"
  render() {
    console.log("We are in the render method");
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default Kennel;
