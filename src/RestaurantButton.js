import React from "react";

const RestaurantButton = props => {
  console.log(props.order);

  return (
    <button className="btn btn-primary" onClick={props.order}>
      Add
    </button>
  );
};

export default RestaurantButton;
