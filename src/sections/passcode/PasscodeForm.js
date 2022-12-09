import { useState, useRef, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Stack, Grid, Container, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { FormProvider, RHFTextField } from "@components/hook-form";

import { FormSchema, defaultValues } from "../form";
import { MuiOtpInput } from "mui-one-time-password-input";

import { OTPLENGTH } from "@config";
import { useAppContext } from "@contexts/AppContext";
import { isMatch } from "date-fns";
import { useRouter } from "next/router";
import { useAppAuthContext } from "@contexts/AuthContext";
import { encryptWallet, restoreFromEncryptedWallet } from "@utils/wallet";
import { usePasscodeContext } from "@contexts/PasscodeContext";
import { getWallet, setIsPasscodeSet, setWallet } from "@utils/sessionManager";
import NewLoadingScreen from "@components/NewLoadingScreen";

export default function PasscodeFrom() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [value, setValue] = useState({ current: "", new: "", confirm: "" });
  const [passcodeMatch, setpasscodeMatch] = useState({
    isMatch: false,
    displayText: "",
  });
  const [error, setError] = useState(false);
  const { addWallet } = useAppAuthContext();
  const { isPasscodeset, changeIsPasscodeSet, changeIsAppLocked } =
    usePasscodeContext();

  const handleCurrent = (newValue) => {
    setValue({ ...value, current: newValue });
  };
  const handleNew = (newValue) => {
    setValue({ ...value, new: newValue });
  };
  const handleconfirm = (newValue) => {
    setValue({ ...value, confirm: newValue });

    if (value.new === newValue) {
      setpasscodeMatch("Matching");
      setpasscodeMatch({ isMatch: true, displayText: "Passcode Matched" });
    } else {
      setpasscodeMatch({
        ...passcodeMatch,
        displayText: "Passcode not Matching",
      });
    }
  };

  const handlePasscodeSave = async () => {
    try {
      setShowLoadingScreen(true);
      const wallet = getWallet();
      const decryptedWallet = await restoreFromEncryptedWallet(
        wallet,
        value.current
      );
      await addWallet(decryptedWallet, value.new);
      setShowLoadingScreen(false);
      changeIsPasscodeSet();
      changeIsAppLocked();
    } catch (err) {
      setShowLoadingScreen(false);
      setError(true);
    }
  };

  if (showLoadingScreen) {
    return (
      <div>
        <NewLoadingScreen />
      </div>
    );
  }

  return (
    <Container>
      <Stack gap={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="body2"
            sx={{ color: "info.main" }}
            onClick={() => router.back()}
          >
            Cancel
          </Typography>
          {passcodeMatch.isMatch ? (
            <Typography variant="body2" onClick={handlePasscodeSave}>
              Done
            </Typography>
          ) : (
            <Typography
              variant="body2"
              sx={{ color: "grey.400", fontWeight: "body2.fontWeight" }}
            >
              Done
            </Typography>
          )}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box display="flex" justifyContent="center" mb={2}>
              <Typography variant="h6" sx={{ color: "primary.main" }}>
                Create/Update passcode
              </Typography>
            </Box>
            <Stack gap={1}>
              {isPasscodeset ? (
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 1, color: "grey.600" }}
                  >
                    Current Passcode
                  </Typography>
                  <MuiOtpInput
                    length={OTPLENGTH}
                    value={value.current}
                    onChange={handleCurrent}
                  />
                </Box>
              ) : null}
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, color: "grey.600" }}
                >
                  Enter New Passcode
                </Typography>
                <MuiOtpInput
                  length={OTPLENGTH}
                  value={value.new}
                  onChange={handleNew}
                />
              </Box>
              {value.new.length === OTPLENGTH ? (
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 1, color: "grey.600" }}
                  >
                    Confirm Passcode
                  </Typography>
                  <MuiOtpInput
                    length={OTPLENGTH}
                    value={value.confirm}
                    onChange={handleconfirm}
                  />
                  <Box
                    variant="body2"
                    sx={{
                      color: `${
                        passcodeMatch.isMatch ? "success.main" : "warning.main"
                      }`,
                      textAlign: "center",
                      mt: 1,
                    }}
                  >
                    {passcodeMatch.displayText}
                  </Box>
                </Box>
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      {error && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Typography variant="body2" sx={{ color: "error.main" }}>
            Current passcode is incorrect. Please enter correct passcode.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
