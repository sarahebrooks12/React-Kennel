import React, { Component } from 'react'
    //import the components we will need
    import LocationCard from './LocationCard'
    import LocationManager from '../../modules/LocationManager'

    class LocationList extends Component {
        //define what this component needs to render
        // state is where JSON can be stored instead of fetching over and over - virtual DOM
        // start with an empty array - first time it runs looping over something empty 
        // this what users see --- .innerHTML
        state = {
            locations: [],
        }
        // fetch call sets state - import the components we will need instead of multiple fetch calls
    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        LocationManager.getAll()
        .then((locations) => {
            console.log(locations)
            this.setState({
                locations: locations
            })
        })
    }

    render(){
        // console.log("ANIMAL LIST: Render");

        return(
            <div className="container-cards">
                {/* forEach doesn't return - map returns a component to render JSX */}
        {this.state.locations.map(currentLocationInLoop => { 
            console.log("This is a current Location in the loop", currentLocationInLoop)
            // render an Location card with current Location in loop 
            return <LocationCard key={currentLocationInLoop.id} locationProp={currentLocationInLoop} closeLocation={this.closeLocation}/>})}
            </div>
        )
    }
    closeLocation = id => {
        LocationManager.delete(id)
        .then(() => {
            LocationManager.getAll()
          .then((newLocations) => {
            this.setState({
                locations: newLocations
            })
          })
        })
      }
}

export default LocationList