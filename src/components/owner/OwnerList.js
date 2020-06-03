import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from '../../modules/OwnerManager'

    class OwnerList extends Component {
        //define what this component needs to render
        // state is where JSON can be stored instead of fetching over and over - virtual DOM
        // start with an empty array - first time it runs looping over something empty 
        // this what users see --- .innerHTML
        state = {
            owners: [],
        }
        // fetch call sets state - import the components we will need instead of multiple fetch calls
    componentDidMount(){
        console.log("Owner LIST: ComponentDidMount");
        //getAll from OwnerManager and hang on to that data; put it in state
        OwnerManager.getAll()
        .then((owners) => {
            console.log(owners)
            this.setState({
                owners: owners
            })
        })
    }

    render(){
        console.log("Owner LIST: Render");

        return(
            <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {this.props.history.push("/owners/new")}}>
            Add Owner
        </button>
      </section>
            <div className="container-cards">
                {/* forEach doesn't return - map returns a component to render JSX */}
        {this.state.owners.map(currentOwnerInLoop => { 
            console.log("This is a current Owner in the loop", currentOwnerInLoop)
            // render an Owner card with current Owner in loop 
            return <OwnerCard key={currentOwnerInLoop.id} ownerProp={currentOwnerInLoop}/>})}
            </div>
            </>
        )
    }
}

export default OwnerList