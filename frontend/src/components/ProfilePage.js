// ProfilePage.js
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // context api centrally handles api calls. Context api is an inbuilt library of React

const ProfilePage = () => {
  const { user, loading } = useContext(AuthContext);
  console.log("user", user);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
