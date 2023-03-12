import React from "react";
import { NavLink } from "react-router-dom";

export default function FourOFour() {
  return (
    <div>
      <h1> It looks like you didn't found what you were looking for...</h1>
      <p>
        Go back <NavLink to="/">home</NavLink>
      </p>
    </div>
  );
}
