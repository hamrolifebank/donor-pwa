import { Button, Box, Typography, Paper } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";
import PrimaryButton from "@components/button/PrimaryButton";
import SecondaryButton from "@components/button/SecondaryButton";

const handleCreateWallet = () => {
  return console.log("Created");
};
const seedPhrase = () => {
  return console.log("seedphrased");
};

const handleRestoreWallet = () => {
  return console.log("Restored");
};

export default function HomeContent() {
  const theme = useTheme();

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
