import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import UserCard from "../user-card/userCard";
import UserInformation from "./UserInformation";
import { useAppAuthContext } from "@contexts/AuthContext";
import { SecondaryButton } from "@components/Button";

const Profile = (props) => {
  const { user } = useAppAuthContext();
  return (
    <div style={{ marginTop: -10 }}>
      <UserCard user={user} />
      <hr />
      <UserInformation user={user} />
      <Container sx={{ mb: 4 }}>
        <SecondaryButton>Create/update passcode</SecondaryButton>
        <SecondaryButton>Backup secret words</SecondaryButton>
        <SecondaryButton>Backup wallet to Google Drive</SecondaryButton>
        <SecondaryButton>Advanced Settings</SecondaryButton>
      </Container>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
