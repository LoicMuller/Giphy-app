import React, { useState } from "react";
import axios from "axios";

const Welcome = () => {
  const [query, setQuery] = useState("");
  const [displayQuery, setDisplayQuery] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = "lYY4eyVwJ7nx1aawRTIfSw1HLV1H0jQP";
  const SEARCH_API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=9&offset=0&rating=g&lang=en`;

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
        console.log(err);
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
  );
};

export default Welcome;
