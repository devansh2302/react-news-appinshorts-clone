import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadmessage">
          <span className="downloadtext">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="apple store"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="play store"
            height="80%"
          />
        </div>
        {newsArray?.length  ? 
        newsArray?.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))
        : <div>Loading</div>}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="LoadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};
export default NewsContent;
