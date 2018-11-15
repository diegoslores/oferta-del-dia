import React from "react";
import { getFunName } from "../helpers";
import { navigate } from "@reach/router";

class StorePicker extends React.Component {
  inputStore = React.createRef();

  goToStore = event => {
    // 1. Stop the <form> from submitting
    event.preventDefault();
    // 2. Get the `name-of-the-store` from <input>
    const myInput = this.inputStore.current;
    const storeName = myInput.value;
    // 3. Change the page to /store/name-of-the-store
    navigate(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref={this.inputStore}
          defaultValue={getFunName()}
        />
        <button type="submit">
          Visit Store{" "}
          <span role="img" aria-labelledby="sushi-box">
            🍱
          </span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
