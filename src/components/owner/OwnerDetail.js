import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

class OwnerDetail extends Component {
  isOwnerId = () => this.state.name !== undefined
  state = {
      name: "",
      phoneNumber: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        phoneNumber: owner.phoneNumber,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    OwnerManager.delete(this.props.ownerId)
    .then(() => this.props.history.push("/owners"))
}

  render() {
    return (
      this.isOwnerId() ?
      <div className="card">
        <div className="card-content">
            <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>{this.state.phoneNumber}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Bye Felicia</button>
        </div>
      </div>
      :
      <h1>Owner does not exist</h1>
    );
  }
}

export default OwnerDetail;