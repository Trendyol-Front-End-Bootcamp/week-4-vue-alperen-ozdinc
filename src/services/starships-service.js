import axios from "axios";

export const getStarships = async (url) => {
  let requestUrl;

  if (url) {
    requestUrl = url;
  } else requestUrl = "https://swapi.dev/api/starships/";

  const response = await axios.get(requestUrl);
  return response.data;
};
