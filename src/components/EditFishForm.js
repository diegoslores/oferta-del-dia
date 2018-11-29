import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.fishKey, updatedFish);
  };

  handleDelete = evento => {
    const deleteFish = {
      ...this.props.fish,
      [evento.currentTarget.name]: evento.currentTarget.value
    };
    this.props.deleteFish(this.props.fishKey, deleteFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          d
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button type="button" onClick={this.handleDelete}>
          Delete Fish?
        </button>
      </div>
    );
  }
}

export default EditFishForm;
