import axios from "axios";

export const searchStarship = async (searchText) => {
  const response = await axios.get(`https://swapi.dev/api/starships/?search=${searchText}`);
  return response.data;
};
