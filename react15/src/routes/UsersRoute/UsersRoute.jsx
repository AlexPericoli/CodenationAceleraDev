import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

const UsersRoute = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const url = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users";
      fetch(url)
         .then((response) => response.json())
         .then((result) => {
            setUsers(result);
         })
         .catch((err) => {
            console.error("Failed retrieving information", err);
         });
   }, []);

   return (
      <div data-testid="users-route" className="container">
         <UsersList users={users} />
      </div>
   );
};

export default UsersRoute;
