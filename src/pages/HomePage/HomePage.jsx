import { useEffect, useState } from "react";
import { FetchFilmsDay } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [dayFilms, setDayFilms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await FetchFilmsDay();

        setDayFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <MovieList films={dayFilms} />
    </>
  );
};

export default HomePage;
