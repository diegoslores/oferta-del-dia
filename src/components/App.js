import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
