import Link from "next/link";
import React from "react";
import { articles } from "./articles";

const Library = () => {
  return (
    <div>
      {articles?.map((article: any) => {
        return (
          <Link
            className=""
            key={article.id}
            href={{
              pathname: `/library/${article.id}`,
              query: {
                id: article.id,
                title: article.title,
                p1: article.p1,
                p2: article.p2,
                p3: article.p3,
                p4: article.p4,
                soundFile: article.soundFile,
                videoFile: article.videoFile,
              },
            }}
          >
            <img src="/articleCard.svg" alt="article card" />
            <span>{article.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Library;
