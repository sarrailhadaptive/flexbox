"use strict";

const loadNewsFromAPI = () => {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-08-24&sortBy=publishedAt&apiKey=78052199596148558787b2fe25e032c1"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

loadNewsFromAPI();
