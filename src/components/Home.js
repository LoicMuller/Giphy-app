import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [apiTrendData, setApiTrendData] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = "lYY4eyVwJ7nx1aawRTIfSw1HLV1H0jQP";
  const TRENDING_API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15&rating=g`;

  useEffect(() => {
    axios
      .get(TRENDING_API_URL)
      .then((res) => {
        const gifsItemsArray = res.data.data;
        setApiTrendData(gifsItemsArray);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, [TRENDING_API_URL]);

  const openModal = () => {
    setModal(true);
    window.scrollTo(0, 0);
    document.body.classList.add("stop-scrolling");
  };

  const closeModal = () => {
    setModal(false);
    document.body.classList.remove("stop-scrolling");
  };

  const displayModal = modal ? (
    <div className="modalContainer">
      <div className="modal abs__center flex fd_col align_itm_ctr">
        <h1>You must login or sign up to save GIFs in your collection</h1>
        <div className="__close-btn" onClick={closeModal}>
          &times;
        </div>
        <div className="__btn-grp">
          <button className="btn">
            <Link to="/login">Log In</Link>
          </button>
          <button className="btn">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="__container">
        <h1>Trending</h1>
        <hr />
        {error !== null && <div>{error}</div>}
        <div className="wrapper">
          {apiTrendData.map((data) => (
            <div className="box" key={data.id}>
              <a href={data.url} target="_blank" rel="noreferrer">
                <img src={data.images.downsized.url} alt={data.title} />
              </a>
              <div className="__icons">
                <i onClick={openModal} className="fas fa-heart"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {displayModal}
    </>
  );
};

export default Home;
