import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="d-flex">
      {props.cities.map((props, index) => (
        <div className="card border-success m-3" key={index}>
          <img src={props.image} alt={props.imageName} />
          <div className="card-body">
            <h1>Visit {props.name}</h1>
            <a href={props.webSite} className="btn btn-primary">
              More info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
