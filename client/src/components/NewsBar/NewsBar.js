import { useQuery } from "@apollo/client";
import React from "react";
import { GET_NEWS } from "../../utils/queries";
import "./newsbar.css";

const NewsBar = () => {
  const { loading, data } = useQuery(GET_NEWS);
  const news = data?.articles || [];
  console.log(news);

  return (
    <div>
      <p className="tech-new-header">View the latest news on Tech!</p>

      {loading ? (
        <div>Loading news</div>
      ) : (
        news.slice(0, 9).map((article) => (
          <div className="news-articles">
            <h4></h4>
            <p className="article title">
              {article.title}
            </p>
            <p>Read more <a href={article.url} target="_blank">here</a></p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsBar;
