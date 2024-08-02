import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjQyMGI3MDgyOTFmODIzNzFiNzQ2OTQ3NGE5MDE4OSIsIm5iZiI6MTcyMjM3MDIxMS40Njc0MTUsInN1YiI6IjY2YTkyMzAwNGI2MjliZTcxOGVlZTkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AoVjBb5pMjQUSjGS4iih8eZarek-VIw3JXucOMCGRuI",
  },
};
export const FetchFilmsDay = async () => {
  const response = await axios.get(url, options);

  return response.data;
};

export const FetchFilmsById = async (id) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);

  return response.data;
};

export const FetchCast = async (id) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);

  return response.data.cast;
};

export const FethReviews = async (id) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
  console.log(response.data.results);

  return response.data.results;
};

export const FetchFilmsByQuery = async (query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
  return response.data.results;
};
