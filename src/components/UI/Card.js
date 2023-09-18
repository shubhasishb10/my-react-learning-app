import React from "react";
import "./Card.css";

const Card = (_props) => {
  const black = "black " + _props.className;
  const white = "white " + _props.className;
  return _props.color === "black" ? (
    <div className={black}>{_props.children}</div>
  ) : (
    <div className={white}>{_props.children}</div>
  );
}

export default Card;
