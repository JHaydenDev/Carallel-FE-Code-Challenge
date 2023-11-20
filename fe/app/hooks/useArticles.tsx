import { useState, useEffect } from "react";
import axios from "axios";

const useArticles = async () => {
  let articles: any = [];

  const getArticles: any = async () => {
    await axios
      .get(
        "https://7dd98862-b53b-4575-a163-ac754de7af4a.mock.pstmn.io/articles"
      )
      .then((data: any) => (articles = data))
      .catch((error) => console.log(error));
  };
  return {
    getArticles,
    articles,
  };
};

export default useArticles;
