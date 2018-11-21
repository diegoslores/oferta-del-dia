import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { name, desc, image, price, status } = this.props.fishDetails;
    const isNotAvailable = status === "unavailable";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={isNotAvailable}>
          {isNotAvailable ? "Sold Out!" : "Add to Cart"}
        </button>
      </li>
    );
  }
}

export default Fish;
