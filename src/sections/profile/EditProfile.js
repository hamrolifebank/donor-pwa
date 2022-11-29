import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import UserCard from "../user-card/userCard";

const Profile = (props) => {
  const user = {
    name: "Katarina Smith",
    cover: "/assets/cover/cover-1.jpg",
    role: "UI Designer",
    follower: 1.2,
    totalPosts: 1.2,
    avatarUrl: "/assets/avatar/avatar-1.jpg",
    following: 1.2,
  };
  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
