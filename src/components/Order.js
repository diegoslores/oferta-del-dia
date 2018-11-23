import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  suma = (acc, value) => {
    return this.props.fishes[value].price * this.props.order[value] + acc;
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce(this.suma, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        {orderIds}
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
