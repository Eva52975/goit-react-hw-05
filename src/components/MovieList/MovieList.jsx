import { Link, useLocation } from "react-router-dom";
import c from "./MovieList.module.css";

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={c.list}>
        {films.map((film) => (
          <li className={c.item} key={film.id}>
            <Link to={`/movies/${film.id}`} state={location}>
              {film.poster_path !== null && <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />}
              <h2 className={c.title}>{film.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
