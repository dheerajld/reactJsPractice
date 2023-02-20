import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      <h3>
        {props.content} {props.date}
      </h3>
    </div>
  );
};

export default Footer;
