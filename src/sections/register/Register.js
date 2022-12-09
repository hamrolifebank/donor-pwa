/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
// @mui
import { Form, Formik } from "formik";

import {
  Stack,
  Grid,
  Container,
  Box,
  TextField,
  Alert,
  Typography,
  MenuItem,
  InputLabel,
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
import CustomInput from "./CustomInput";
import { RegisterFormSchema } from "./RegisterFormSchema";
import CustomSelect from "./CustomSelect";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


// ----------------------------------------------------------------------

export default function UpdateProfileForm() {
  const [type, setType] = useState("text");


  const preloadedValues = {
    fullName: "",
    phone: "",
    email: "",
    // dob: "",
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

  const handleFormSubmit = (e, values, actions) => {
    // e.preventDefault();
    console.log("the hande form submit entered");
    console.log("the values is", values);
    console.log("the action is", actions);

    try {
      console.log("the hande form submit entered in try");
      // console.log("the fullname is", e.target.fullName.value);

      const userData = {
        fullname: fullName.values,
        phone: phone.values,
        email: email.values,
        // dob: e.target.dob.values,
        bloodGroup: bloodGroup.values,
        gender: gender.values,
      };
      console.log("the userdata is", userData);
      // addUser(userData);

      // push(PATH_WALLET.mnemonic);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    // handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const handleCancel = () => {
    deleteWallet();
    push(PATH_AUTH.login);
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        phone: "",
        email: "",
        dob: "",
        bloodGroup: "",
        gender: "",
      }}
      validationSchema={RegisterFormSchema}
      onSubmit={(values) => {
        const userData = {
          fullname: values.fullName,
          phone: values.phone,
          email: values.email,
          dob: values.dob,
          bloodGroup: values.bloodGroup,
          gender: values.gender,
        };
        console.log("the userdata is", userData);
        addUser(userData);

        push(PATH_WALLET.mnemonic);
      }}
    >
      {(props) => (
     <Container>
    <Typography variant="h3" sx={{mb:2, mt:2}}>Register</Typography>
   
        <Form>
          <Grid container item xs={12} sx={{p:"0px 5px"}}>
          <Grid  item xs={12}>
          <CustomInput
            label="Full name"
            name="fullName"
            type="text"
            placeholder="Enter your fullname"
            value={props.values.fullName}
            onChange={props.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          </Grid>
          <Grid item xs={12}>
          <CustomInput
            label="Date of Birth"
            name="dob"
            placeholder="Enter your Date of birth"
            type={type}
            value={props.values.dob}
            onFocus={() => setType("date")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
         
          />
          </Grid>
          <Grid  item xs={12}>
          <CustomInput
            label="Phone number"
            name="phone"
            type="text"
            placeholder="Enter your Phone Number"
            // onChange={props.handleChange}
            value={props.values.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CallIcon />
                </InputAdornment>
              ),
            }}
          />
          </Grid>
          <Grid  item xs={12}>
          <CustomInput
            label="E-mail"
            name="email"
            type="text"
            placeholder="Enter your Email"
            // onChange={props.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          </Grid>
          <Grid  item xs={12}>

          <CustomSelect
            label="Blood Group"
            name="bloodGroup"
            displayEmpty
            renderValue={(value) => (value !== '' ? value : 'Please select a BloodGroup')}
                
            // onChange={props.handleChange}
          >
            {/* <MenuItem value="none" disabled>Please select a Blood Group</MenuItem> */}
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </CustomSelect>
          </Grid>
          <Grid  item xs={12}>

          <CustomSelect
            label="Gender"
            name="gender"
            displayEmpty
            renderValue={(value) => (value !== '' ? value : 'Please select a Gender')}
            // onChange={props.handleChange}
          >
            {/* <MenuItem value="none" disabled>Please select a Gender</MenuItem> */}
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </CustomSelect>
          </Grid>
    
          {/* <Controller
            name="dob"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...field}
                  label="Date of Birth"
                  renderInput={(params) => (
                    <CustomInput
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
          /> */}
          <Grid  item xs={12}>
          <PrimaryButton sx={{height:40, mb:2, mt:1}} type="submit">Submit</PrimaryButton>
          </Grid>
          <Grid  item xs={12}>

          <SecondaryButton> Cancel </SecondaryButton>
          </Grid>
          </Grid>
        </Form>
        </Container>
      )}
    </Formik>
    // <Container>
    //   <Typography variant="h3">Register</Typography>
    //   <Typography variant="subtitle1">
    //     Let's get you all set up so you can verify your personal account
    //   </Typography>
    //   <FormProvider methods={methods} onSubmit={handleSubmit(handleFormSubmit)}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12} md={12}>
    //         <Stack spacing={3}>
    //           <RHFTextField name="fullName" label="Full Name" />
    //           <ListSelectFilter
    //             name="bloodGroup"
    //             label="Choose Blood Group"
    //             options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
    //             value={value.bloodGroup}
    //             onChange={changeBloodGroup}
    //           />
    //           <Box
    //             display="flex"
    //             gap={3}
    //             justifyContent="center"
    //             alignItems="center"
    //           >
    //             <RHFTextField name="phone" label="Phone number" />
    //           </Box>
    //           <Box
    //             display="flex"
    //             gap={3}
    //             justifyContent="space-between"
    //             alignItems="center"
    //           >
    //             <RHFTextField name="email" label="something@gmail.com" />
    //           </Box>
    //           <Box
    //             display="flex"
    //             gap={3}
    //             justifyContent="space-between"
    //             alignItems="center"
    //           >
    //             <Controller
    //               name="dob"
    //               control={control}
    //               render={({ field, fieldState: { error } }) => (
    //                 <LocalizationProvider dateAdapter={AdapterDayjs}>
    //                   <DatePicker
    //                     {...field}
    //                     label="Date of Birth"
    //                     renderInput={(params) => (
    //                       <TextField
    //                         name="dob"
    //                         fullWidth
    //                         {...params}
    //                         error={!!error}
    //                         helperText={error?.message}
    //                       />
    //                     )}
    //                   />
    //                 </LocalizationProvider>
    //               )}
    //             />
    //           </Box>
    //           <Box
    //             display="flex"
    //             gap={3}
    //             justifyContent="space-between"
    //             alignItems="center"
    //           >
    //             <ListSelectFilter
    //               name="gender"
    //               label="Choose Gender"
    //               options={["male", "female", "other"]}
    //               value={value.gender}
    //               onChange={changeGender}
    //             />
    //           </Box>
    //           <Grid container item xs={12} spacing={2}>
    //             <Grid item={true} xs={12} md={7}>
    //               <PrimaryButton type="submit">Submit</PrimaryButton>
    //             </Grid>
    //             <Grid item={true} xs={12} md={7}>
    //               <SecondaryButton onClick={handleCancel}>
    //                 Cancel
    //               </SecondaryButton>
    //             </Grid>
    //           </Grid>
    //         </Stack>
    //       </Grid>
    //     </Grid>
    //   </FormProvider>
    // </Container>
  );
}
