import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => (
   <div data-testid="posts" className="container">
      {posts.map((post) => (
         <Post key={post.id} postInfo={post} />
      ))}
   </div>
);

export default Posts;
