import React from "react";

import { Link } from "react-router-dom";

const User = ({ infoUser }) => {
   const { avatar, email, name, username } = infoUser;

   return (
      <article data-testid="user" className="post">
         <header className="post__header">
            <img src={avatar} alt="avatar" />
            <p>{name}</p>
            <h3>{username}</h3>
         </header>
      </article>
   );
};

export default User;
