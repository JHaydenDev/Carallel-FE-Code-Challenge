import Link from "next/link";
import React from "react";
import ArticleFilter from "./components/ArticleFilter";

const Library = async () => {
  const res = await fetch(
    `https://45cac1d2-1f62-4f3d-a362-04960007c781.mock.pstmn.io/articles`
  );
  const data = await res.json();
  const articles = data.Articles;

  const handleArticleColor = (id: any) => {
    if (parseInt(id) === 1 || parseInt(id) === 4) {
      return ["bg-article-green"];
    }
    if (parseInt(id) === 2 || parseInt(id) === 5) {
      return "bg-article-purple";
    }
    if (parseInt(id) === 3) {
      return "bg-article-yellow";
    }
  };

  const handleArticleImageShape = (id: any) => {
    if (parseInt(id) === 1 || parseInt(id) === 2) {
      return "rounded-lg ";
    } else {
      return "rounded-full  ";
    }
  };

  return (
    <div className="bg-body-color">
      <ArticleFilter />
      <div className="mx-5">
        <h1
          className="text-left font-medium text-xl my-6"
          style={{ fontFamily: "serif" }}
        >
          Recommended
        </h1>

        {/* first I would make an api call that would call for the recommended articles and make those the full card articles, then I would make the rest circles.  For my implementation, rather than have things run off screen which is a bad user experience, I made things responsive.  For now I am not sorting between articles or making seperate api calls.  Right now I am just making a single call for all the articles.  I would also like to seperate the article card to its own component, but i was running out of time */}
        <div className=" flex max-w-full flex-wrap justify-around">
          {articles?.map((article: any) => {
            return (
              <div key={article.articleId} className="w-1/3 rounded-lg m-3">
                <Link
                  className="rounded-lg w-full"
                  key={article.articleId}
                  href={{
                    pathname: `/library/${article.articleId}`,
                    query: {
                      id: article.articleId,
                      title: article.title,
                      p1: article.p1,
                      p2: article.p2,
                      p3: article.p3,
                      p4: article.p4,
                    },
                  }}
                >
                  <img
                    className={`h-20 w-full	
                    ${handleArticleImageShape(article.id)}
                    ${handleArticleColor(article.id)}`}
                    src="/articleCard.svg"
                    alt="article card"
                  />
                  <span className="bg-header-color w-full text-center text-sm">
                    {article.title}
                  </span>
                </Link>
              </div>
            );
          })}
          <span className="w-full text-2xl mb-14 mt-5	">
            Additional Resources
          </span>
        </div>
      </div>
    </div>
  );
};

export default Library;
