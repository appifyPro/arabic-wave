import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  return (
    <Link to={props.to} className="btn center" rel="noreferrer">
      <span>{props.name}</span>
    </Link>
  );
}
