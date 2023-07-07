import React, { useEffect, useState } from "react";
import { fetcher } from "../api/fetchData";
import { Link } from "react-router-dom";

const apiImage = "https://image.tmdb.org/t/p/w500";

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);
  const [check, setCheck] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const dataMovie = await fetcher("movie", "popular", 1);
      setMovies(dataMovie.results);
      const dataSerie = await fetcher("tv", "popular", 1);
      setSeries(dataSerie.results);
    };
    fetch();
  }, []);

  const scrollLeft = (event) => {
    const button = event.target;
    const sliderContainer = button.parentNode;
    sliderContainer.scrollBy({ left: 400 });
  };

  const scrollRight = (event) => {
    const button = event.target;
    const sliderContainer = button.parentNode;
    sliderContainer.scrollBy({ left: -400 });
  };

  useEffect(() => {
    const containers = document.querySelectorAll(".sliderContainer");
    containers.forEach((container) => {
      const next = container.querySelector(".next");
      const prev = container.querySelector(".prev");
      const currentWidth = container.scrollLeft;
      const maxWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const isAtEnd = currentWidth >= maxWidth - clientWidth;

      prev.disabled = false;
      next.disabled = false;
      if (currentWidth === 0) prev.disabled = true;
      if (isAtEnd) next.disabled = true;
    });
    setTimeout(() => {
      setCheck(check + 1);
    }, 200);
  });

  return (
    <div className="homeContainer">
      <h2 className="title_category">Popular movies</h2>
      <div className="carousel">
        <div className="sliderContainer">
          <button className="prev btn" onClick={scrollRight}>
            ❮
          </button>
          {movies?.map((movie, index) => (
            <Link className="sliderCard" to={`/contentpage/movie/${movie.id}`}>
              <img src={apiImage + movie.poster_path} alt="" />
            </Link>
          ))}
          <button className="next btn" onClick={scrollLeft}>
            ❯
          </button>
        </div>
      </div>
      <h2 className="title_category">Popular series</h2>
      <div className="carousel">
        <div className="sliderContainer">
          <button className="prev btn" onClick={scrollRight}>
            ❮
          </button>
          {series?.map((serie, index) => (
            <Link className="sliderCard" to={`/contentpage/tv/${serie.id}`}>
              <img src={apiImage + serie.poster_path} alt="" />
            </Link>
          ))}
          <button className="next btn" onClick={scrollLeft}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
