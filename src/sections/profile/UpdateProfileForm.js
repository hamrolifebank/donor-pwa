import { useState, useRef, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
// @mui
import { Stack, Grid, Container, Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { DatePicker } from "@mui/x-date-pickers";
// components
import Iconify from "@components/iconify";
import { FormProvider, RHFTextField } from "@components/hook-form";
//
import { FormSchema, defaultValues } from "../form";
import ListSelectFilter from "./ListSelectFilter";

// ----------------------------------------------------------------------

export default function ReactHookForm() {
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    // watch,
    reset,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  // const values = watch();

  // useEffect(() => {
  //   if (values.editor === "<p><br></p>") {
  //     resetField("editor");
  //   }
  // }, [resetField, values.editor]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(
      JSON.stringify(
        {
          ...data,
          birthDate: data.birthDate && fTimestamp(data.birthDate),
        },
        null,
        2
      )
    );

    reset();
  };

  return (
    <Container>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack spacing={3}>
              <RHFTextField name="fullName" label="Full Name" />
              {/* <RHFTextField type="select" name="Blood Group" /> */}
              <ListSelectFilter label="Blood Group" />
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
                <RHFTextField name="phone" label="9860365404" />
              </Box>
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
                <RHFTextField name="email" label="something@gmail.com" />
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
                {/* <Controller
                  name="birthDate"
                  render={() => (
                    <DatePicker
                      label="1/02/2022"
                      inputFormat="dd/MM/yyyy"
                      // renderInput={(params) => <TextField fullWidth />}
                    />
                  )}
                /> */}
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
                <ListSelectFilter label="Choose Gender" />
              </Box>
              <LoadingButton
                fullWidth
                color="info"
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}
