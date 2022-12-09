/* eslint-disable react/no-unescaped-entities */
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Grid, InputLabel, TextField, Typography } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "@components/Button";

import { useAppAuthContext } from "@contexts/AuthContext";
import { useRouter } from "next/router";

import { PATH_DASHBOARD } from "@routes/paths";
import { deleteWalletFromLocal, getWallet } from "@utils/sessionManager";
import { restoreFromEncryptedWallet } from "@utils/wallet";
import NewLoadingScreen from "@components/NewLoadingScreen";

export default function Mnemonic({ passcode }) {
  if (!passcode) {
    passcode = "";
  }

  const { push } = useRouter();
  const [wallet, setWallet] = useState(null);
  const encryptedWallet = getWallet();

  const getDecryptedWallet = async (passcode) => {
    const decryptedWallet = await restoreFromEncryptedWallet(
      encryptedWallet,
      passcode
    );
    setWallet(decryptedWallet);
  };
  useEffect(() => {
    getDecryptedWallet(passcode);
  }, []);

  const [copied, setCopied] = useState("Copy all mnemonics");

  if (!wallet || !wallet.mnemonic || wallet.mnemonic.length === 0) {
    return <NewLoadingScreen />;
  } else {
    const words = wallet && wallet.mnemonic.phrase.split(" ");

    const handlewritten = () => {
      push(PATH_DASHBOARD.root);
    };

    const handleCopy = async (e) => {
      e.preventDefault();
      const myArray = [...words];

      const mappedArray = myArray.map((word, index) => {
        return `word${index + 1} = ${word}\n`;
      });
      let joinedString = mappedArray.join("");
      await navigator.clipboard.writeText(joinedString);
      setCopied("Mnemonics Copied!");
      setTimeout(() => {
        setCopied("Copy Again?");
      }, 5000);
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
                <PrimaryButton onClick={handlewritten}>
                  {" "}
                  Yes, I've written down
                </PrimaryButton>
              </Grid>
              <Grid item xs={12} md={4}>
                <SecondaryButton onClick={handleCopy}>{copied}</SecondaryButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}
