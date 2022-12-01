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

// ----------------------------------------------------------------------

export default function PasscodeFrom() {
  const [value, setValue] = useState("");

  const handleChange1 = (newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (newValue) => {
    setValue(newValue);
  };
  const handleChange3 = (newValue) => {
    setValue(newValue);
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
            <Stack spacing={3}>
              <Typography variant="subtitle1">Current Passcode</Typography>
              <MuiOtpInput
                length={OTPLENGTH}
                value={value}
                onChange={handleChange1}
              />
              <Typography variant="subtitle1">New Passcode</Typography>
              <MuiOtpInput
                length={OTPLENGTH}
                value={value}
                onChange={handleChange2}
              />
              <Typography variant="subtitle1">Confirm Passcode</Typography>
              <MuiOtpInput
                length={OTPLENGTH}
                value={value}
                onChange={handleChange3}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
