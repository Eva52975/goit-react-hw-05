import { NavLink } from "react-router-dom";
import c from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={c.header}>
      <nav>
        <ul className={c.list}>
          <li className={c.item}>
            <NavLink to="/">
              <h2>Home</h2>
            </NavLink>
          </li>
          <li className={c.item}>
            <NavLink to="/movies">
              <h2>Movies</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
