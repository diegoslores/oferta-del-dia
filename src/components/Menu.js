import React from "react";
import Fish from "./Fish";
import Header from "./Header";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(this.props.fishes).map(fish => (
            <Fish key={fish} fishDetails={this.props.fishes[fish]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
