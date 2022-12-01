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

// ----------------------------------------------------------------------

export default function PasscodeFrom() {
  const { isPasscodeSet } = useAppContext();
  const [value, setValue] = useState({ current: "", new: "", confirm: "" });
  const [passcodeMatch, setpasscodeMatch] = useState("");

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
    } else {
      setpasscodeMatch("Passcode not matching");
    }
  };

  return (
    <Container>
      <Stack gap={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Cancel</Typography>
          <Typography>Done</Typography>
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
                        passcodeMatch === "Matching"
                          ? "success.main"
                          : "warning.main"
                      }`,
                      textAlign: "center",
                      mt: 1,
                    }}
                  >
                    {passcodeMatch}
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
