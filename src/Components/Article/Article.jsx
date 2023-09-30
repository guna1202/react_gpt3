import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog01" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
          <p>Read full article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
