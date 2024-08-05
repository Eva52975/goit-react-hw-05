import { useEffect, useState } from "react";
import { FetchCast } from "../../services/api";
import { useParams } from "react-router-dom";
import c from "./MovieCast.module.css";

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await FetchCast(params.movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.movieId]);

  if (!cast) {
    return <h2>Loading...</h2>;
  }
  if (cast.length === 0) {
    return "Sorry, not found";
  }

  return (
    <>
      <h3>Cast</h3>
      <ul className={c.list}>
        {cast.map((item) => (
          <li className={c.item} key={item.credit_id}>
            {item.profile_path !== null && <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} />}
            <h4>{item.name}</h4>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
