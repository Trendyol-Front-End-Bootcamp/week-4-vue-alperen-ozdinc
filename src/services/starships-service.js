import axios from "axios";

export const getStarships = async (url) => {
  let requestUrl = "https://swapi.dev/api/starships/";
  if (url.length) {
    requestUrl = url;
  }

  const response = await axios.get(requestUrl);
  return response.data;
};
