import React from "react";
import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div>
      <h2>Careers Layout</h2>
      <Outlet />
    </div>
  );
}
