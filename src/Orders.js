import { useState } from "react";
import React from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = props => {
  let [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <>
      <RestaurantButton order={orderOne} />
      <li>
        {props.orderType}: {orders}
      </li>
    </>
  );
};

export default Orders;
