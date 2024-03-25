import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { data } = useContext(UserContext);
  console.log("🚀 ~ Profile ~ data:", data);
  if (!data) return <div>Please Login!</div>;
  return <div>Welcome {data.username}!</div>;
};

export default Profile;
