import React from "react";
import Inventory from "./Inventory";
import Order from "./Order";
import samplefishes from "../sample-fishes";
import Menu from "./Menu";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    //read from localstorage
    const localStorageRef = localStorage.getItem(this.props.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    //sync data from firebase
    const config = {
      context: this,
      state: "fishes"
    };
    this.ref = base.syncState(`${this.props.storeId}/fishes`, config);
  }

  componentWillUnMount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.storeId, JSON.stringify(this.state.order));
  }

  addFish = newFish => {
    // take a copy of existing state
    const newFishes = { ...this.state.fishes };
    // add newFish to newFishes
    newFishes[`fish${Date.now()}`] = newFish;
    // set newFishes as the new state
    this.setState({ fishes: newFishes });
  };

  updatedFish = (fishKey, updatedFish) => {
    // take a copy of existing state
    const updatedFishes = { ...this.state.fishes };
    // add our updatedFish to updatedFish
    updatedFishes[fishKey] = updatedFish;
    // set updatedFish as the new state
    this.setState({ fishes: updatedFishes });
  };

  deleteFish = fishKey => {
    // take a copy of existing state
    const deletedFish = { ...this.state.fishes };
    // add our updatedFish to updatedFish
    deletedFish[fishKey] = null;
    // set updatedFish as the new state
    this.setState({ fishes: deletedFish });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: samplefishes });
  };

  addToOrder = key => {
    // take a copy of existing state
    const newOrder = { ...this.state.order };
    // Either add our order item to newOrder or update quantity
    newOrder[key] = newOrder[key] ? newOrder[key] + 1 : 1;
    // set newOrder as the new state
    this.setState({ order: newOrder });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu fishes={this.state.fishes} addToOrder={this.addToOrder} />
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          fishes={this.state.fishes}
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          updateFish={this.updatedFish}
          deleteFish={this.deleteFish}
        />
      </div>
    );
  }
}

export default App;
