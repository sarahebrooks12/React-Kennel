import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalCard'
    import AnimalManager from '../../modules/AnimalManager'

    class AnimalList extends Component {
        //define what this component needs to render
        // state is where JSON can be stored instead of fetching over and over - virtual DOM
        // start with an empty array - first time it runs looping over something empty 
        // this what users see --- .innerHTML
        state = {
            animals: [],
        }
        // fetch call sets state - import the components we will need instead of multiple fetch calls
    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animals) => {
            console.log(animals)
            this.setState({
                animals: animals
            })
        })
    }

    render(){
        console.log("ANIMAL LIST: Render");

        return(
            <div className="container-cards">
                {/* forEach doesn't return - map returns a component to render JSX */}
        {this.state.animals.map(currentAnimalInLoop => { 
            console.log("This is a current animal in the loop", currentAnimalInLoop)
            // render an animal card with current animal in loop 
            return <AnimalCard key={currentAnimalInLoop.id} animalProp={currentAnimalInLoop}
            deleteAnimal={this.deleteAnimal}/>})}
            </div>
        )
    }


    
    deleteAnimal = id => {
  AnimalManager.delete(id)
  .then(() => {
    AnimalManager.getAll()
    .then((newAnimals) => {
      this.setState({
          animals: newAnimals
      })
    })
  })
}
}

export default AnimalList