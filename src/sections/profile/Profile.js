import React from "react";

import { Container } from "@mui/material";

import UserCard from "../user-card/userCard";
import UserInformation from "./UserInformation";
import { useAppAuthContext } from "@contexts/AuthContext";
import { SecondaryButton } from "@components/Button";
import { useRouter } from "next/router";

const Profile = (props) => {
  const { user } = useAppAuthContext();
  const { push } = useRouter();
  return (
    <div style={{ marginTop: -10 }}>
      <UserCard user={user} />
      <hr />
      <UserInformation user={user} />
      <Container sx={{ mb: 4 }}>
        <SecondaryButton onClick={() => push("/profile/passcode")}>
          Create/update passcode
        </SecondaryButton>
        <SecondaryButton onClick={() => push("/profile/backupmnemonic")}>
          Backup secret words
        </SecondaryButton>
        <SecondaryButton>Backup wallet to Google Drive</SecondaryButton>
        <SecondaryButton>Advanced Settings</SecondaryButton>
      </Container>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
