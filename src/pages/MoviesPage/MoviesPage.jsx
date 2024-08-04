import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { FetchFilmsByQuery } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [value, setValue] = useState("");
  const [filmByQuery, setfilmByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeValue = (newValue) => {
    setValue(newValue);
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    try {
      const getData = async () => {
        const data = await FetchFilmsByQuery(value);
        if (data.length === 0) {
          return toast("Sorry, not found");
        }

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
      <Toaster />
    </>
  );
};

export default MoviesPage;
