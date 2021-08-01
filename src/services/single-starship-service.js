import axios from "axios";

export const getSingleStarship = async (id) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
    return response.data;
  } catch (err) {
    return [];
  }
};
