import React, { useState } from "react";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";
import { MnemonicPage } from "@sections/mnemonic";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { OTPLENGTH } from "@config";
import { usePasscodeContext } from "@contexts/PasscodeContext";
const PAGE_TITLE = "Backup your mnemonic";

Mnemonic.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);

export default function Mnemonic(props) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);
  const [passcodeEntered, setPasscodeEntered] = useState(false);

  const { isPasscodeSet } = usePasscodeContext();

  const handleInput = (newValue) => {
    setPasscode(newValue);

    if (newValue.length === OTPLENGTH) {
      setPasscodeEntered(true);
    }
  };

  if (!isPasscodeSet) {
    return <MnemonicPage />;
  }
  return (
    <div>
      {passcodeEntered ? (
        <MnemonicPage passcode={passcode} />
      ) : (
        <>
          <Container>
            <Stack gap={2}>
              <Box display="flex" justifyContent="space-between"></Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Box display="flex" justifyContent="center" mb={2}>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      Enter Your Passcode
                    </Typography>
                  </Box>
                  <Stack gap={1}>
                    <Box>
                      <MuiOtpInput
                        name="passcode"
                        length={OTPLENGTH}
                        value={passcode}
                        onChange={handleInput}
                      />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            {error && (
              <Box display="flex" justifyContent="center" mt={2}>
                <Typography variant="body2" sx={{ color: "error.main" }}>
                  Passcode is incorrect. Please enter valid password.
                </Typography>
              </Box>
            )}
          </Container>
        </>
      )}
    </div>
  );
}
Mnemonic.propTypes = {};
