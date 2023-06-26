import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY;
const baseurl = process.env.REACT_APP_BASEURL;

export const getMovielist = async () => {
  const movie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${env.REACT_APP_BASEURL}`);
  console.log({ movieList: movie });
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
