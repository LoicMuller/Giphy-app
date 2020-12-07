import React, { useEffect, useState } from "react";
import axios from "axios";

const Welcome = ({ setSavedItems }) => {
  const [query, setQuery] = useState("");
  const [displayQuery, setDisplayQuery] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [apiTrendData, setApiTrendData] = useState([]);
  const [trendError, setTrendError] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "lYY4eyVwJ7nx1aawRTIfSw1HLV1H0jQP";
  const TRENDING_API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15&rating=g`;
  const SEARCH_API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=9&offset=0&rating=g&lang=en`;

  useEffect(() => {
    axios
      .get(TRENDING_API_URL)
      .then((res) => {
        const gifsItemsArray = res.data.data;
        setApiTrendData(gifsItemsArray);
        console.log(res.data.data);
      })
      .catch((err) => {
        setTrendError(err.message);
      });
  }, [TRENDING_API_URL]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setDisplayQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(SEARCH_API_URL)
      .then((res) => {
        const arrayFetchedData = res.data.data;
        setFetchedData(arrayFetchedData);
        setQuery("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleClearData = () => {
    setFetchedData([]);
    setQuery("");
    setDisplayQuery("");
  };

  const displayData = fetchedData.length === 0 ? "" : "wrapper";

  return (
    <>
      <div className="__container search__container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={query} onChange={(e) => handleChange(e)} />
          <button className="c__pointer">Search</button>
        </form>
        <div className="__result_msg">
          <h1>Results for : {displayQuery}</h1>
          <button className="c__pointer" onClick={handleClearData}>
            Clear
          </button>
        </div>
        <hr />
        {error !== null && <div>{error}</div>}
        {fetchedData.length <= 0 && <div>No results found</div>}
        <div className={displayData}>
          {fetchedData.map((data) => (
            <div className="box" key={data.id}>
              <a href={data.url} target="_blank" rel="noreferrer">
                <img src={data.images.downsized.url} alt={data.title} />
              </a>
              <div className="__icons">
                <i className="fas fa-heart"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="trends__container">
        <h1>TRENDS</h1>
        <hr />
        {trendError !== null && <div>{trendError}</div>}
        <div className="wrapper2">
          {apiTrendData.map((data) => (
            <div className="box2" key={data.id}>
              <a href={data.url} target="_blank" rel="noreferrer">
                <img src={data.images.downsized.url} alt={data.title} />
              </a>
              <div className="__icons">
                <i className="fas fa-heart"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Welcome;
