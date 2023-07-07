import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { useLocation, useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  const [query, setQuery] = useState(
    new URLSearchParams(location.search).get("query")
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (query !== null) setSearchParams({ query });
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <form className={style.searchContainer} onSubmit={handleSearch}>
      <input
        type="text"
        className={style.searchBar}
        value={query}
        onChange={handleChange}
      />
      <button className={style.searchButton} type="submit">
        Cerca
      </button>
    </form>
  );
}
