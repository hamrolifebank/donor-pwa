import { Button, Box, Typography, Paper } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";
import { useTheme } from "@emotion/react";

const handleCreateWallet = () => {
  return console.log("Created");
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
        <Button
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          onClick={handleCreateWallet}
        >
          <Icon
            icon="fluent:wallet-credit-card-24-filled"
            height={30}
            width={40}
          />
          Create new wallet
        </Button>
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
        <Button
          sx={{
            mt: 2,
            border: 1,
            color: "common.black",
          }}
          fullWidth
          onClick={handleRestoreWallet}
        >
          <Icon
            icon="bi:file-earmark-text-fill"
            height={30}
            width={40}
            color={theme.palette.secondary.main}
          />
          Seed phrase
        </Button>

        <Button
          sx={{
            mt: 2,
            border: 1,
            color: "common.black",
          }}
          fullWidth
          onClick={handleRestoreWallet}
        >
          <Icon
            icon="akar-icons:google-fill"
            height={30}
            width={40}
            color={theme.palette.primary.lighter}
          />
          Google drive
        </Button>
      </Box>
    </Container>
  );
}
