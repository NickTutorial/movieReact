import React, { useEffect, useState } from "react";
import { fetcherTitle } from "../api/fetchData";
import { useParams } from "react-router-dom";

export default function ContentPage() {
  const [data, setData] = useState(null);
  const { type, id } = useParams();

  const apiImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetch = async () => {
      const response = await fetcherTitle(type, id);
      setData(response);
    };

    fetch();
  }, []);
  console.log(data);

  return (
    <div className="detailsContainer">
      <div className="imageContainer">
        <img src={apiImage + data?.poster_path} alt="poster"></img>
      </div>
      <div className="contents">
        <h1>{type === "movie" ? data?.title : data?.name}</h1>
        <h3>{data?.tagline}</h3>
        <div className="overview">
          {data?.overview}
          <div className="additionalInfo">
            <div>
              <h3>Release date</h3>
              {type === "movie" ? data?.release_date : data?.first_air_date}
            </div>
            <div>
              <h3>Average rating</h3>
              {data?.vote_average}
            </div>
          </div>
          <button className="buttonSite" onClick={() => {window.open(data?.homepage)}}>Open site</button>
        </div>
      </div>
    </div>
  );
}
