import { Outlet, useParams, NavLink } from "react-router-dom";
import { FetchFilmsById } from "../../services/api";
import { useEffect, useState } from "react";
import c from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [film, setFilms] = useState();
  const params = useParams();

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
      {" "}
      <div className={c.description}>
        <div>
          <h2 className={c.title}>
            {` ${film.title} 
          (${film.release_date.slice(0, 4)})`}
          </h2>
          <img src={`https://image.tmdb.org/t/p/w400${film.backdrop_path}`} />
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
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
