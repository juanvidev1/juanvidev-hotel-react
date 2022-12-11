import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [selectedRow, setSelectedRow] = useState();

  /*const rowIsSelected = () => {
    setSelectedRow(true);
    setHighlightColor((selectedRow) => {
      return "table-success";
    });*/

  const clickHandler = ind => {
    return selectedRow === ind ? setSelectedRow(null) : setSelectedRow(ind);
  };

  console.log(selectedRow);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check in date</th>
          <th>Check out date</th>
          <th>Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((props, index) => (
          <tr
            key={props.id}
            onClick={() => clickHandler(index)}
            className={selectedRow === index ? "table-success" : ""}
          >
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.firstName}</td>
            <td>{props.surname}</td>
            <td>{props.email}</td>
            <td>{props.roomId}</td>
            <td>{props.checkInDate}</td>
            <td>{props.checkOutDate}</td>
            <td>
              {moment(props.checkOutDate).diff(props.checkInDate, "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
