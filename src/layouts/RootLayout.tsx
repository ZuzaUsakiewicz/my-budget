import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>Root</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
