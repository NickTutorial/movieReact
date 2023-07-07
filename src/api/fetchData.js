const api_key = process.env.REACT_APP_API_KEY;

export const fetcher = (type, category, page) => {
  return fetch(
    `https://api.themoviedb.org/3/${type}/${category}?api_key=${api_key}&page=${page}`
  )
    .then((res) => res.json())
    .catch(console.error);
};

export const fetcherTitle = (type, id) => {
  return fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}`)
    .then((res) => res.json())
    .catch(console.error);
};

export const fetcherSearch = (type, keyword, page) => {
  return fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${api_key}&query=${keyword}&page=${page}`)
    .then((res) => res.json())
    .catch(console.error);
};