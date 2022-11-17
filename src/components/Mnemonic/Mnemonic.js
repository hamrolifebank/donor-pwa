import { Box, Container } from "@mui/system";
import React from "react";
import { Grid, InputLabel, TextField, Typography } from "@mui/material";
import PrimaryButton from "@components/Button/PrimaryButton";
import SecondaryButton from "@components/Button/SecondaryButton";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useRouter } from "next/router";
import Login from "@components/LoginPage/LoginPage";

export default function Mnemonic() {
  const { wallet } = useAppAuthContext();
  const words = wallet && wallet.mnemonic.phrase.split(" ");

  const { push } = useRouter();

  if (!wallet) {
    return <Login />;
  }

  const handlewritten = () => {
    push("/");
  };
  const handlecancel = () => {
    return console.log("handlecancel");
  };
  return (
    <Container>
      <Typography variant="h3"> Let's secure your account.</Typography>
      <Typography variant="subtitle3">
        Please save this 12 word mnemonic safely.
      </Typography>
      <Box sx={{ p: 3 }}>
        <Grid container xs={12} spacing={2}>
          {words.map((word, index) => {
            return (
              <Grid item xs={6} md={4} lg={3} key={index}>
                <InputLabel> word {index + 1}</InputLabel>
                <TextField size="small" placeholder={word} />
              </Grid>
            );
          })}
        </Grid>
        <Box pt={5}>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={12} md={6}>
              <PrimaryButton func={handlewritten}>
                {" "}
                Yes, I've written down
              </PrimaryButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <SecondaryButton func={handlecancel}>
                {" "}
                Copy all mnemonics{" "}
              </SecondaryButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
