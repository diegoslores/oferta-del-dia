import React from "react";
import Inventory from "./Inventory";
import Order from "./Order";
import samplefishes from "../sample-fishes";
import Menu from "./Menu";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = newFish => {
    // take a copy of existing state
    const newFishes = { ...this.state.fishes };
    // add newFish to newFishes
    newFishes[`fish${Date.now()}`] = newFish;
    // set newFishes as the new state
    this.setState({ fishes: newFishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: samplefishes });
  };

  addToOrder = key => {
    // take a copy of existing state
    const newOrder = { ...this.state.order };
    // Either add our order item to newOrder or update quantity
    if (newOrder[key]) {
      newOrder[key] += 1;
    } else {
      newOrder[key] = 1;
    }
    // set newOrder as the new state
    this.setState({ order: newOrder });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu fishes={this.state.fishes} addToOrder={this.addToOrder} />
        <Order fishes={this.state.fishes} pedido={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
