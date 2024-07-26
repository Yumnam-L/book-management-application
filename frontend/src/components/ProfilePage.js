import React, { useEffect, useState } from "react";
import api from "../services/api";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("getting inside try blolck");
        //const token = localStorage.getItem("token");
        //console.log("token", token);
        const response = await api.get("/profile");
        console.log("response", response);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {/* <img src={profile.profilePicture} alt={profile.name} /> */}
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default ProfilePage;
