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
      <h3>View the latest news on Tech!</h3>

      {loading ? (
        <div>Loading news</div>
      ) : (
        news.slice(0, 9).map((article) => (
          <div className="news-articles">
            <h4></h4>
            <a href={article.url} target="_blank" className="article title">
              {article.title}
            </a>
            <p>Read more here</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsBar;
