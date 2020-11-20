import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [apiTrendData, setApiTrendData] = useState([]);

  const API_KEY = "lYY4eyVwJ7nx1aawRTIfSw1HLV1H0jQP";
  const TRENDING_API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15&rating=g`;
  // const SEARCH_API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en`;

  useEffect(() => {
    axios
      .get(TRENDING_API_URL)
      .then((res) => {
        const gifsItemsArray = res.data.data;
        console.log(gifsItemsArray);
        setApiTrendData(gifsItemsArray);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [TRENDING_API_URL]);

  return (
    <div className="__container ">
      <h1>Trending</h1>
      <hr />
      <div className="wrapper">
        {apiTrendData.map((data) => (
          <div className="box" key={data.id}>
            <a href={data.url} target="_blank" rel="noreferrer">
              <img src={data.images.downsized.url} alt={data.title} />
            </a>
            <div className="__icons">
              <i className="fas fa-heart"></i>
              <i className="fas fa-link"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
