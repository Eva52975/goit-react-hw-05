import { Outlet, useParams, NavLink, useLocation, Link } from "react-router-dom";
import { FetchFilmsById } from "../../services/api";
import { Suspense, useEffect, useState } from "react";
import c from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { useRef } from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(c.link, isActive && c.active);
};

const MovieDetailsPage = () => {
  const [film, setFilms] = useState();
  const params = useParams();
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await FetchFilmsById(params.movieId);

        setFilms(data);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, [params.movieId]);

  if (!film) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Link to={goBackRef.current}>
        <h3 className={c.reference}>Go to back</h3>
      </Link>
      <div className={c.description}>
        <div>
          <h2 className={c.title}>
            {` ${film.title} 
          (${film.release_date.slice(0, 4)})`}
          </h2>
          <img src={`https://image.tmdb.org/t/p/w400${film.backdrop_path}`} alt={film.title} />
        </div>

        <div className={c.wrap}>
          <h3 className={c.title}>Overview</h3>
          <p className={c.text}>{film.overview}</p>
          <h3 className={c.title}>Genres</h3>
          <ul>
            {film.genres.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={c.flex}>
        <NavLink className={buildLinkClass} to="cast">
          <h2>Cast</h2>
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          <h2>Reviews</h2>
        </NavLink>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
