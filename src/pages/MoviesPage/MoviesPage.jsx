import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { FetchFilmsByQuery } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [filmByQuery, setfilmByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const handleChangeValue = (newValue) => {
    if (!newValue) {
      return setSearchParams({});
    }

    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    try {
      if (!searchParams.get("query")) {
        return;
      }

      const getData = async () => {
        const data = await FetchFilmsByQuery(searchParams.get("query"));
        if (data.length === 0) {
          return toast("Sorry, not found");
        }

        setfilmByQuery(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  return (
    <>
      <SearchBar handleChangeValue={handleChangeValue} />
      <MovieList films={filmByQuery} />
      <Toaster />
    </>
  );
};

export default MoviesPage;
