import { useQuery } from "@apollo/client";
import React from "react";
import { GET_NEWS } from "../../utils/queries";
import * as BsIcons from "react-icons/bs";
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
        news.slice(0, 8).map((article) => (
          <div className="news-articles">
            <div>
              <div className="article-title">
                <p >{article.title}</p>
              </div>
              <span className="read-more">
                Read more{" "}
                <a href={article.url} target="_blank" style={{textDecoration: 'none'}}>
                  here<BsIcons.BsFillArrowLeftCircleFill />
                </a>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsBar;
