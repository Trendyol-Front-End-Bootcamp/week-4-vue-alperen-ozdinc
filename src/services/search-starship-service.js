import axios from "axios";

export const searchStarship = async (searchText) => {
  try{
    const response = await axios.get(`https://swapi.dev/api/starships/?search=${searchText}`);
    return response.data;
  }catch (err){
    return [];
  }
};
