import { useState } from "react";
import React from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = props => {
  console.log(props.orderType);

  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <>
      <p>
        {props.orderType}: {orders}
        <br />
        <RestaurantButton order={orderOne} />
      </p>
    </>
  );
};

export default Orders;
