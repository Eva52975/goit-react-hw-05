import { NavLink } from "react-router-dom";
import clsx from "clsx";
import c from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.active);
};

const Navigation = () => {
  return (
    <header className={c.header}>
      <nav>
        <ul className={c.list}>
          <li className={c.item}>
            <NavLink className={buildLinkClass} to="/">
              <h2>Home</h2>
            </NavLink>
          </li>
          <li className={c.item}>
            <NavLink className={buildLinkClass} to="/movies">
              <h2>Movies</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
