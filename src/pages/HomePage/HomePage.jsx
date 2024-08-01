import { useEffect, useState } from "react";
import { FetchFilmsDay } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [dayFilms, setDayFilms] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await FetchFilmsDay();

        setDayFilms(data.results);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(dayFilms);

  return (
    <>
      <MovieList films={dayFilms} />
    </>
  );
};

export default HomePage;
