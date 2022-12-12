import { useState } from "react";
import { Form, Formik } from "formik";
import { Grid, Container, Typography, MenuItem } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "@components/Button";
import { useRouter } from "next/router";
import { PATH_AUTH, PATH_WALLET } from "@routes/paths";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useAppAuthContext } from "@contexts/AuthContext";
import { RegisterFormSchema } from "@sections/form";
import { BloodGroups, Genders } from "@config";

export default function Register() {
  const [type, setType] = useState("text");
  const { addUser, deleteWallet } = useAppAuthContext();
  const { push } = useRouter();

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
        addUser(userData);
        push(PATH_WALLET.mnemonic);
      }}
    >
      {(props) => (
        <Container>
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Register
          </Typography>

          <Form>
            <Grid container item xs={12} sx={{ p: "0px 5px" }}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <CustomInput
                  label="Phone number"
                  name="phone"
                  type="text"
                  placeholder="Enter your Phone Number"
                  onChange={props.handleChange}
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
              <Grid item xs={12}>
                <CustomInput
                  label="E-mail"
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                  onChange={props.handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomSelect
                  label="Blood Group"
                  name="bloodGroup"
                  displayEmpty
                  renderValue={(value) =>
                    value !== "" ? value : "Please select a BloodGroup"
                  }
                  onChange={props.handleChange}
                >
                  {BloodGroups.map((key, index) => {
                    return (
                      <MenuItem value={key} key={index}>
                        {key}
                      </MenuItem>
                    );
                  })}
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomSelect
                  label="Gender"
                  name="gender"
                  displayEmpty
                  renderValue={(value) =>
                    value !== "" ? value : "Please select a Gender"
                  }
                  onChange={props.handleChange}
                >
                  {Genders.map((key, index) => {
                    return (
                      <MenuItem value={key} key={index}>
                        {key}
                      </MenuItem>
                    );
                  })}
                </CustomSelect>
              </Grid>

              <Grid item xs={12}>
                <PrimaryButton sx={{ height: 40, mb: 2, mt: 1 }} type="submit">
                  Submit
                </PrimaryButton>
              </Grid>
              <Grid item xs={12}>
                <SecondaryButton onClick={handleCancel}>
                  {" "}
                  Cancel{" "}
                </SecondaryButton>
              </Grid>
            </Grid>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
