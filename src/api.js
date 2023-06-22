import axios from "axios";

const getMovielist = async () => {
  const movie = await axios.get("");
  return;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
