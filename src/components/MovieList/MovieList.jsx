import { Link } from "react-router-dom";

const MovieList = ({ films }) => {
  return (
    <div>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
