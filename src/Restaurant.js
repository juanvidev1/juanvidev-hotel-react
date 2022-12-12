import React from "react";
import Orders from "./Orders";
// import { useState } from "react";

const Restaurant = () => {
  // let [orders, setOrders] = useState(0);

  /*const orderOne = () => {
    setOrders(orders + 1);
  };*/

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
        <Orders orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
