import { useState, useRef, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Stack, Grid, Container, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "@components/hook-form";
//onChange={handleChange}
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

// ----------------------------------------------------------------------

export default function PasscodeFrom() {
  const router = useRouter();

  const [value, setValue] = useState({ current: "", new: "", confirm: "" });
  const [passcodeMatch, setpasscodeMatch] = useState({
    isMatch: false,
    displayText: "",
  });

  const { addWallet } = useAppAuthContext();
  const { isPasscodeSet, changeIsPasscodeSet, changeIsAppLocked } =
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
    const wallet = await getWallet();
    const decryptedWallet = await restoreFromEncryptedWallet(wallet, "");

    await addWallet(decryptedWallet, value.new);
    changeIsPasscodeSet();
    changeIsAppLocked();
  };

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
              {isPasscodeSet ? (
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
    </Container>
  );
}
