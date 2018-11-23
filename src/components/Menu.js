import React from "react";
import Fish from "./Fish";
import Header from "./Header";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(this.props.fishes).map(fishKey => (
            <Fish
              key={fishKey}
              index={fishKey}
              fishDetails={this.props.fishes[fishKey]}
              addToOrder={this.props.addToOrder}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
