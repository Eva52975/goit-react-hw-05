import { useParams } from "react-router-dom";
import { FetchFilmsById } from "../../services/api";
import { useEffect } from "react";

const MovieDetailsPage = () => {
  const params = useParams();
  console.log(params.movieId);

  useEffect(() => {
    useEffect(() => {
      FetchFilmsById(params.userId).then((data) => setUser(data));
    }, [params.movieId]);
  }, []);
};

export default MovieDetailsPage;
