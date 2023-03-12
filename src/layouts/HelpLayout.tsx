import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      Help Layout
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
