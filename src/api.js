import axios from "axios";

const getMovielist = async () => {
  const movie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular`);
  return;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
