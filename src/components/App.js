import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import samplefishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {}
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fish => (
              <Fish key={fish} fishDetails={this.state.fishes[fish]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
