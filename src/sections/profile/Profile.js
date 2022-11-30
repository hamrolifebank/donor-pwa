import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import UserCard from "../user-card/userCard";
import UserInformation from "./UserInformation";
import { useAppAuthContext } from "@contexts/AuthContext";
import { PrimaryButton } from "@components/Button";

const Profile = (props) => {
  const { user } = useAppAuthContext();
  return (
    <div>
      <UserCard user={user} />
      <hr />
      <UserInformation user={user} />
      <Container sx={{ mb: 4 }}>
        <PrimaryButton sx={{ mb: 2 }}>Create/update passcode</PrimaryButton>
        <PrimaryButton sx={{ mb: 2 }}>Backup secret words</PrimaryButton>
        <PrimaryButton sx={{ mb: 2 }}>
          Backup wallet to Google Drive
        </PrimaryButton>
        <PrimaryButton sx={{ mb: 2 }}>Advanced Settings</PrimaryButton>
      </Container>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
