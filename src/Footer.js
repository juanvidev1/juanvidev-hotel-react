import React from "react";

const Footer = props => {
  return (
    <footer>
      {props.footerList.map((props, index) => (
        <ul key={index}>
          <li>{props}</li>
        </ul>
      ))}
    </footer>
  );
};

export default Footer;
