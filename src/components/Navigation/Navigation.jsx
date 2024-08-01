import { NavLink } from "react-router-dom";
import c from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={c.header}>
      <nav>
        <ul className={c.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
