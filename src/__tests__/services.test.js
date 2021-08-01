import axios from "axios";

import {
  getStarships,
  getSingleStarship,
  searchStarship,
} from "../services/index";

jest.mock("axios");

describe("Get Starships Service", () => {
  it("should return starships when there is no url parameter", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          count: 36,
          next: "https://swapi.dev/api/starships/?page=3",
          previous: "https://swapi.dev/api/starships/?page=1",
          results: [
            {
              model: "CR90 corvette",
              name: "CR90 corvette",
              url: "https://swapi.dev/api/starships/2/",
            },
            {
              model: "Sentinel-class landing craft",
              name: "Sentinel-class landing craft",
              url: "https://swapi.dev/api/starships/5/",
            },
          ],
        },
      });
    });

    const starships = await getStarships();

    expect(starships).toEqual({
      count: 36,
      next: "https://swapi.dev/api/starships/?page=3",
      previous: "https://swapi.dev/api/starships/?page=1",
      results: [
        {
          model: "CR90 corvette",
          name: "CR90 corvette",
          url: "https://swapi.dev/api/starships/2/",
        },
        {
          model: "Sentinel-class landing craft",
          name: "Sentinel-class landing craft",
          url: "https://swapi.dev/api/starships/5/",
        },
      ],
    });
  });
  it("should return starships when there is a url parameter", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          count: 36,
          next: "https://swapi.dev/api/starships/?page=3",
          previous: "https://swapi.dev/api/starships/?page=1",
          results: [
            {
              model: "CR90 corvette",
              name: "CR90 corvette",
              url: "https://swapi.dev/api/starships/2/",
            },
            {
              model: "Sentinel-class landing craft",
              name: "Sentinel-class landing craft",
              url: "https://swapi.dev/api/starships/5/",
            },
          ],
        },
      });
    });

    const starships = await getStarships(
      "https://swapi.dev/api/starships/?page=3"
    );

    expect(starships).toEqual({
      count: 36,
      next: "https://swapi.dev/api/starships/?page=3",
      previous: "https://swapi.dev/api/starships/?page=1",
      results: [
        {
          model: "CR90 corvette",
          name: "CR90 corvette",
          url: "https://swapi.dev/api/starships/2/",
        },
        {
          model: "Sentinel-class landing craft",
          name: "Sentinel-class landing craft",
          url: "https://swapi.dev/api/starships/5/",
        },
      ],
    });
  });
  it("should return [] when there is an error", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.reject({
        data: [],
      });
    });

    const starships = await getStarships();

    expect(starships).toEqual([]);
  });
});

describe("Search Starship Service", () => {
  it("should return matching starships", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          count: 1,
          next: null,
          previous: null,
          results: [
            {
              model: "CR90 corvette",
              name: "CR90 corvette",
              url: "https://swapi.dev/api/starships/2/",
            },
          ],
        },
      });
    });

    const starships = await searchStarship("cr90");

    expect(starships).toEqual({
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          model: "CR90 corvette",
          name: "CR90 corvette",
          url: "https://swapi.dev/api/starships/2/",
        },
      ],
    });
  });
  it("should return [] when there is an error", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.reject({
        data: [],
      });
    });

    const starships = await searchStarship("cr90");

    expect(starships).toEqual([]);
  });
});

describe("Single Starship Service", () =>{
    it("should return starship with the given id", async () => {
        axios.get.mockImplementationOnce(() => {
          return Promise.resolve({
            data: {
                  model: "CR90 corvette",
                  name: "CR90 corvette",
                  url: "https://swapi.dev/api/starships/2/",
            }
          });
        });
    
        const starships = await getSingleStarship(2);
    
        expect(starships).toEqual({
            model: "CR90 corvette",
            name: "CR90 corvette",
            url: "https://swapi.dev/api/starships/2/",
      });
      });
      it("should return [] when there is an error", async () => {
        axios.get.mockImplementationOnce(() => {
          return Promise.reject({
            data: [],
          });
        });
    
        const starships = await getSingleStarship(2);
    
        expect(starships).toEqual([]);
      });
})