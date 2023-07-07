import React, { useEffect, useState } from "react";
import { fetcher, fetcherSearch } from "../api/fetchData";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Movies() {
  const [data, setData] = useState([]);

  const [queryValue, setQueryValue] = useState("");
  const [page, setPage] = useState(1);

  const handleLoadMore = (e) => {
    setPage(page + 1);
  };

  useEffect(() => {
    setQueryValue(new URLSearchParams(window.location.search).get("query"));
    setPage(1);
  }, [window.location.search]);

  useEffect(() => {
    const fetch = async () => {
      let response;
      if (queryValue === null || queryValue === "")
        response = await fetcher("movie", "popular", page);
      else response = await fetcherSearch("movie", queryValue, page);
      if (page === 1) setData(response.results);
      else setData([...data, ...response.results]);
    };
    fetch();
  }, [page, queryValue]);

  return (
    <div>
      <div>
        <h2 className="title_category">Movies</h2>
        <SearchBar />
      </div>
      <div className="gridContainer">
        {data?.map((movie, index) => (
          <Link
            key={index}
            style={{ textDecoration: "none", color: "#000000" }}
            to={`/contentpage/movie/${movie.id}`}
          >
            <Card content={movie} type={"movie"} key={index} />
          </Link>
        ))}
      </div>
      <div className="loadMoreContainer">
        <button className="loadMore" onClick={handleLoadMore}>
          Load more
        </button>
      </div>
    </div>
  );
}
