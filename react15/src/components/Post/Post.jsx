import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
   const exemploPost = [
      {
         id: "1",
         userId: "1",
         imageUrl:
            "https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg",
         comments: [
            {
               id: "1",
               postId: "1",
               createdAt: "2020-03-27T00:58:06.401Z",
               comment:
                  "programming the transmitter won't do anything, we need to override the back-end PNG bus!",
               avatar:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/yayteejay/128.jpg",
               name: "Santino Rowe",
            },
            {
               id: "31",
               postId: "1",
               createdAt: "2020-03-27T04:04:36.486Z",
               comment:
                  "I'll navigate the digital SCSI matrix, that should protocol the SAS pixel!",
               avatar:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg",
               name: "Virginia Kshlerin",
            },
         ],
      },
   ];
   const { id, userId, imageUrl, comments } = postInfo;
   return (
      <article data-testid="post" className="post">
         <ul>
            <li>{id}</li>
            <li>{userId}</li>
            <li>{imageUrl}</li>
            <ul>
               {comments.map((comment) => (
                  <>
                     <li>{comment.id}</li>
                     <li>{comment.postId}</li>
                     <li>{comment.createdAt}</li>
                     <li>{comment.comment}</li>
                     <li>{comment.avatar}</li>
                     <li>{comment.name}</li>
                  </>
               ))}
            </ul>
         </ul>
      </article>
   );
};

export default Post;
