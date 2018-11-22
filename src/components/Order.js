import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  suma = (acc, value) => {
    return this.props.fishes[value].price * this.props.pedido[value] + acc;
  };

  render() {
    const pedidoIds = Object.keys(this.props.pedido);
    const total = pedidoIds.reduce(this.suma, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        {pedidoIds}
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
