/* eslint-disable react/no-unescaped-entities */
import { Box, Container } from "@mui/system";
import React from "react";
import { Grid, InputLabel, TextField, Typography } from "@mui/material";
import PrimaryButton from "@components/Button/PrimaryButton";
import SecondaryButton from "@components/Button/SecondaryButton";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useRouter } from "next/router";

import { PATH_DASHBOARD } from "@routes/paths";
import { deleteWalletFromLocal } from "@utils/sessionManager";

export default function Mnemonic() {
  const { push } = useRouter();
  const { wallet } = useAppAuthContext();
  if (!wallet.mnemonic || wallet.mnemonic.length === 0) {
    console.log("No mnemonic found");
    push(PATH_DASHBOARD.root);
  } else {
    const words = wallet && wallet.mnemonic.phrase.split(" ");

    const handlewritten = () => {
      deleteWalletFromLocal();
      push(PATH_DASHBOARD.root);
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
          <Grid container item xs={12} spacing={2}>
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
            <Grid container item xs={12} spacing={2}>
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
}
