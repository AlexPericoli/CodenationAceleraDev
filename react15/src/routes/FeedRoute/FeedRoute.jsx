import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
   const [posts, setPosts] = useState([]);
   const [stories, setStories] = useState([]);
   const getUserHandler = true;
   let loading = false;

   useEffect(() => {
      const url =
         "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/1/posts";
      fetch(url)
         .then((response) => response.json())
         .then((result) => {
            setPosts(result);
         })
         .catch((err) => {
            console.error("Failed retrieving information", err);
         });
   }, []);

   return (
      <div data-testid="feed-route">
         <Stories stories={stories} getUserHandler={getUserHandler} />
         {loading && <Loading />}
         <Posts posts={posts} getUserHandler={getUserHandler} />
      </div>
   );
};

export default FeedRoute;
