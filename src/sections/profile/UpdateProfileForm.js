import { useState, useRef, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Stack, Grid, Container } from "@mui/material";
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
    watch,
    reset,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (values.editor === "<p><br></p>") {
      resetField("editor");
    }
  }, [resetField, values.editor]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(
      JSON.stringify(
        {
          ...data,
          photo: data.photo,
          startDate: data.startDate && fTimestamp(data.startDate),
          endDate: data.endDate && fTimestamp(data.endDate),
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Stack spacing={3}>
              <RHFTextField name="fullName" label="Full Name" />

              {/* <RHFTextField type="select" name="Blood Group" /> */}
              <ListSelectFilter label="Blood Group" />

              <RHFTextField name="age" label="Age" />
            </Stack>
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
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}
