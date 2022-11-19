import { Box, Container } from "@mui/system";
import React from "react";
import { Grid, InputLabel, TextField, Typography } from "@mui/material";
import PrimaryButton from "@components/button/PrimaryButton";
import SecondaryButton from "@components/button/SecondaryButton";

let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Mnemonic() {
  const handlewritten = () => {
    return console.log("handlewritten");
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
          {numarr.map((num, index) => {
            return (
              <Grid item xs={6} md={4} lg={3} key={index}>
                <InputLabel> word {num}</InputLabel>
                <TextField size="small" />
              </Grid>
            );
          })}
        </Grid>
        <Box pt={5}>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={12} md={6}>
              <PrimaryButton onClick={handlewritten}>
                {" "}
                Yes, I've written down
              </PrimaryButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <SecondaryButton onClick={handlecancel}>
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
