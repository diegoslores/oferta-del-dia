import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  TotalReducer = (subTotal, value) => {
    const fish = this.props.fishes[value];
    const quantity = this.props.order[value];
    const isAvailable = fish.status === "available";
    if (isAvailable) {
      return fish.price * quantity + subTotal;
    } else {
      return subTotal;
    }
  };

  renderOrder = orderKey => {
    const quantity = this.props.order[orderKey];
    const { price, name, status } = this.props.fishes[orderKey];
    const isAvailable = status === "available";
    if (isAvailable) {
      return (
        <li key={orderKey}>
          {quantity} lbs {name} <span>{formatPrice(price * quantity)}</span>
        </li>
      );
    } else {
      return <li key={orderKey}>Sorry {name} is not available</li>;
    }
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce(this.TotalReducer, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
