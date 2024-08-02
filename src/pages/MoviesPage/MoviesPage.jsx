import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { FetchFilmsByQuery } from "../../services/api";

const MoviesPage = () => {
  const [value, setValue] = useState("");
  const [filmByQuery, setfilmByQuery] = useState([]);

  const handleChangeValue = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    try {
      const getData = async () => {
        const data = await FetchFilmsByQuery(value);

        setfilmByQuery(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [value]);

  return (
    <>
      <SearchBar handleChangeValue={handleChangeValue} />
      <MovieList films={filmByQuery} />
    </>
  );
};

export default MoviesPage;
