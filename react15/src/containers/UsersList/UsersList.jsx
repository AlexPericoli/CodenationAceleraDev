import React from "react";

import User from "../../components/User";
import Loading from "../../components/Loading";

import "./UsersList.scss";

const UsersList = ({ users }) => {
   let loading = false;
   return (
      <section data-testid="user-list" className="users-list">
         {users.length > 0 &&
            users.map((user) => <User key={user.id} infoUser={user} />)}
         {loading && <Loading />}
      </section>
   );
};

export default UsersList;
