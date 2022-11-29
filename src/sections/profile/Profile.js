import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import UserCard from "../user-card/userCard";
import UserInformation from "./UserInformation";
import { useAppAuthContext } from "@contexts/AuthContext";

const Profile = (props) => {
  const { user } = useAppAuthContext();
  return (
    <div>
      <UserCard user={user} />
      <hr />
      <UserInformation user={user} />

      <Typography
        variant="h6"
        sx={{
          color: "primary.main",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Settings
      </Typography>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
