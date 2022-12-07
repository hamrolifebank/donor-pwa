/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
// @mui
import {
  Stack,
  Grid,
  Container,
  Box,
  TextField,
  Alert,
  Typography,
} from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// components
import Iconify from "@components/iconify";
import { FormProvider, RHFTextField } from "@components/hook-form";
//
import { FormSchema, defaultValues } from "../form";
import { useAppAuthContext } from "@contexts/AuthContext";
import { PrimaryButton, SecondaryButton } from "@components/Button";
import { ListSelectFilter } from "@sections/profile";
import { useRouter } from "next/router";
import { PATH_AUTH, PATH_WALLET } from "@routes/paths";

// ----------------------------------------------------------------------

export default function UpdateProfileForm() {
  const preloadedValues = {
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    bloodGroup: "",
    gender: "",
  };

  const [value, setValue] = useState({
    bloodGroup: "",
    gender: "",
  });
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(FormSchema),
    defaultValues: preloadedValues,
  });

  const changeBloodGroup = (e) => {
    e.preventDefault();
    setValue({ ...value, bloodGroup: e.target.value });
  };
  const changeGender = (e) => {
    e.preventDefault();
    setValue({ ...value, gender: e.target.value });
  };
  const { addUser, deleteWallet } = useAppAuthContext();
  const { push } = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("the hande form submit entered");
      console.log("the fullname is", e.target.fullName.value);

      const userData = {
        fullname: e.target.fullName.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        dob: e.target.dob.value,
        bloodGroup: e.target.bloodGroup.value,
        gender: e.target.gender.value,
      };
      addUser(userData);

      push(PATH_WALLET.mnemonic);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const handleCancel = () => {
    deleteWallet();
    push(PATH_AUTH.login);
  };

  return (
    <Container>
      <Typography variant="h3">Register</Typography>
      <Typography variant="subtitle1">
        Let's get you all set up so you can verify your personal account
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack spacing={3}>
              <RHFTextField name="fullName" label="Full Name" />
              <ListSelectFilter
                name="bloodGroup"
                label="Choose Blood Group"
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                value={value.bloodGroup}
                onChange={changeBloodGroup}
              />
              <Box
                display="flex"
                gap={3}
                justifyContent="center"
                alignItems="center"
              >
                <RHFTextField name="phone" label="Phone number" />
              </Box>
              <Box
                display="flex"
                gap={3}
                justifyContent="space-between"
                alignItems="center"
              >
                <RHFTextField name="email" label="something@gmail.com" />
              </Box>
              <Box
                display="flex"
                gap={3}
                justifyContent="space-between"
                alignItems="center"
              >
                <Controller
                  name="dob"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        {...field}
                        label="Date of Birth"
                        renderInput={(params) => (
                          <TextField
                            name="dob"
                            fullWidth
                            {...params}
                            error={!!error}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                />
              </Box>
              <Box
                display="flex"
                gap={3}
                justifyContent="space-between"
                alignItems="center"
              >
                <ListSelectFilter
                  name="gender"
                  label="Choose Gender"
                  options={["male", "female", "other"]}
                  value={value.gender}
                  onChange={changeGender}
                />
              </Box>
              <Grid container item xs={12} spacing={2}>
                <Grid item={true} xs={12} md={7}>
                  <PrimaryButton type="submit">Submit</PrimaryButton>
                </Grid>
                <Grid item={true} xs={12} md={7}>
                  <SecondaryButton onClick={handleCancel}>
                    Cancel
                  </SecondaryButton>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}
