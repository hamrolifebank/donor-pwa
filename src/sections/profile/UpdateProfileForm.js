import { useState, useRef, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { Stack, Grid, Container, Box, TextField, Alert } from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Iconify from "@components/iconify";
import { FormProvider, RHFTextField } from "@components/hook-form";

import { FormSchema } from "../form";
import ListSelectFilter from "./ListSelectFilter";
import { useAppAuthContext } from "@contexts/AuthContext";
import { PrimaryButton } from "@components/Button";

export default function UpdateProfileForm() {
  const { user, addUser } = useAppAuthContext();

  const [value, setValue] = useState({
    bloodGroup: user.bloodGroup,
    gender: user.gender,
  });
  const [showAlert, setShowAlert] = useState(null);
  useEffect(() => {
    setShowAlert(false);
  }, []);
  const preloadedValues = {
    fullName: user.fullname,
    phone: user.phone,
    email: user.email,
    dob: user.dob,
    bloodGroup: user.bloodGroup,
    gender: user.gender,
  };
  const methods = useForm({
    mode: "onTouched",
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

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullname: e.target.fullName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      dob: e.target.dob.value,
      bloodGroup: e.target.bloodGroup.value,
      gender: e.target.gender.value,
    };
    const updatedUserDetails = { ...user, ...userData };
    addUser(updatedUserDetails);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Container>
      {showAlert ? (
        <Box sx={{ m: "10px 0" }}>
          <Alert severity="success">User updated Sucessfully</Alert>
        </Box>
      ) : (
        <Box sx={{ m: "15px 0" }}></Box>
      )}
      <FormProvider methods={methods} onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack spacing={3}>
              <RHFTextField name="fullName" label="Full Name" />
              <ListSelectFilter
                name="bloodGroup"
                label="Blood Group"
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                value={value.bloodGroup}
                onChange={changeBloodGroup}
              />
              {user.isVerified ? null : (
                <Box
                  display="flex"
                  gap={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Iconify
                    icon="eva:phone-call-fill"
                    sx={{ color: "primary.main" }}
                  ></Iconify>
                  <RHFTextField name="phone" label="Phone no." />
                </Box>
              )}

              <Box
                display="flex"
                gap={3}
                justifyContent="space-between"
                alignItems="center"
              >
                <Iconify
                  icon="material-symbols:mail"
                  sx={{ color: "primary.main" }}
                ></Iconify>
                <RHFTextField name="email" label="Email" />
              </Box>
              <Box
                display="flex"
                gap={3}
                justifyContent="space-between"
                alignItems="center"
              >
                <Iconify
                  icon="game-icons:candles"
                  sx={{ color: "primary.main" }}
                ></Iconify>
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
                <Iconify
                  icon="mdi:gender-male-female-variant"
                  sx={{ color: "primary.main" }}
                ></Iconify>
                <ListSelectFilter
                  name="gender"
                  label="Choose Gender"
                  options={["male", "female", "other"]}
                  value={value.gender}
                  onChange={changeGender}
                />
              </Box>
              <PrimaryButton type="submit" variant="contained">
                Update
              </PrimaryButton>
            </Stack>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}
