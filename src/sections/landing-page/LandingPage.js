/* eslint-disable react/no-unescaped-entities */
import { Button, Box, Typography, Paper } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import { PrimaryButton, SecondaryButton } from "@components/Button";

import { useAppAuthContext } from "@contexts/AuthContext";
import library from "@utils/wallet";
import { useRouter } from "next/router";

const seedPhrase = () => {
  return console.log("seedphrased");
};

const handleRestoreWallet = () => {
  return console.log("Restored");
};

const styles = {
  image: {
    backgroundImage: `url(${"https://assets.rumsan.com/esatya/hlb-navbar-logo.png"})`,
    opacity: 0.1,
  },
};

export default function Login() {
  const theme = useTheme();
  const router = useRouter();
  const { addPublicAddress, addWallet } = useAppAuthContext();

  const handleCreateWallet = async () => {
    const wallet = await library.createWallet();
    addPublicAddress(wallet.address);
    addWallet(wallet);
  };

  return (
    <Container>
      <Typography variant="h3" sx={{ mt: 5, pb: 2 }}>
        Let's setup your wallet.
      </Typography>
      <Box
        sx={{
          border: 0.1,
          p: 2,
          borderRadius: 1,
        }}
      >
        <PrimaryButton onClick={handleCreateWallet}>
          <Icon
            icon="fluent:wallet-credit-card-24-filled"
            height={30}
            width={40}
          />
          Create new wallet
        </PrimaryButton>
      </Box>
      <hr />
      <Typography variant="h5" sx={{ mt: 2, pb: 2 }}>
        Restore existing wallet from
      </Typography>
      <Box
        sx={{
          border: 0.1,
          p: 2,
          borderRadius: 1,
        }}
      >
        <SecondaryButton onClick={seedPhrase}>
          <Icon
            icon="bi:file-earmark-text-fill"
            height={30}
            width={40}
            color={theme.palette.secondary.main}
          />
          Seed phrase
        </SecondaryButton>

        <SecondaryButton onClick={handleRestoreWallet}>
          <Icon
            icon="akar-icons:google-fill"
            height={30}
            width={40}
            color={theme.palette.primary.lighter}
          />
          Google drive
        </SecondaryButton>
      </Box>
    </Container>
  );
}
