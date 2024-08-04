import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FethReviews } from "../../services/api";
import c from "./MovieReviews.module.css";

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await FethReviews(params.movieId);
        setReviews(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [params.movieId]);

  console.log(reviews);

  if (!reviews) {
    return <h2>Loading...</h2>;
  }
  if (reviews.length === 0) {
    return "Sorry, not found";
  }
  return (
    <>
      <ul className={c.list}>
        {reviews.map((item) => (
          <li className={c.item} key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;
