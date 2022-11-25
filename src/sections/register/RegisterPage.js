/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Select,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { PrimaryButton, SecondaryButton } from "@components/Button";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useRouter } from "next/router";
import { PATH_AUTH, PATH_WALLET } from "@routes/paths";

const PAGE_TITLE = "Register";

export default function Register() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    gender: "Choose gender",
    bloodGroup: "Choose group",
    dob: "",
    events: [
      {
        id: "0014768dfad5fddlkejr1250",
        name: "HLB center",
        date: "09/11/2023",
        location: "Labim mall check",
        isRegistered: true,
        isDonated: false,
        isVerified: false,
        manuallyAdded: false,
      },
      {
        id: "02568fgrb1g25frdlkejr1250",
        name: "Sweta blood donation jj",
        date: "09/12/2022",
        location: "Boudha stupa check",
        isRegistered: true,
        isDonated: true,
        isVerified: true,
        manuallyAdded: false,
      },
      {
        id: "524aasg4rdy53frrykt56f1250",
        name: "Sweta blood donation",
        date: "05/11/2023",
        location: "Chabahil stupa",
        isRegistered: true,
        isDonated: false,
        isVerified: false,
        manuallyAdded: false,
      },
      {
        id: "079poir45cclfkfdclkejr1250",
        name: "HLB center 11",
        date: "07/08/2022",
        location: "Jhamsikhel",
        isRegistered: true,
        isDonated: true,
        isVerified: true,
        manuallyAdded: false,
      },
      {
        id: "0014768dfa09kjfddlkejr1250",
        name: "HLB center",
        date: "08/09/2021",
        location: "Civil mall",
        isRegistered: false,
        isDonated: false,
        isVerified: false,
        manuallyAdded: true,
      },
      {
        id: "0014768dfa15fgjfddlkejr1250",
        name: "Red cross",
        date: "01/04/2021",
        location: "Basantapur",
        isRegistered: false,
        isDonated: false,
        isVerified: false,
        manuallyAdded: true,
      },
      {
        id: "0014768dfad5fddlkejr1250",
        name: "HLB center",
        date: "09/02/2018",
        location: "Bhaktapur",
        isRegistered: true,
        isDonated: true,
        isVerified: true,
        manuallyAdded: false,
      },
    ],
    isPhoneVerified: false,
  });

  const { addUser, deleteWallet } = useAppAuthContext();
  const { push } = useRouter();

  const handleSubmit = () => {
    addUser(user);

    push(PATH_WALLET.mnemonic);
  };

  const handleCancel = () => {
    deleteWallet();
    push(PATH_AUTH.login);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <Container>
      <Typography variant="h3">Register</Typography>
      <Typography variant="subtitle1">
        Let's get you all set up so you can verify your personal account
      </Typography>
      <Box sx={{ p: 2 }}>
        <Grid container item xs={12} spacing={2}>
          <Grid item={true} xs={12} md={7}>
            <InputLabel> Full name</InputLabel>

            <TextField
              id="fullname"
              value={user.fullname}
              name="fullname"
              onChange={handleInput}
              type="text"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item={true} xs={12} md={3}>
            <InputLabel> Gender</InputLabel>
            <Select
              id="selectG"
              size="small"
              value={user.gender}
              name="gender"
              onChange={handleInput}
              fullWidth
            >
              <MenuItem value="Choose gender" disabled>
                Choose gender
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </Grid>
          <Grid item={true} xs={12} md={7}>
            <InputLabel> Phone number</InputLabel>
            <TextField
              id="phone"
              type="number"
              size="small"
              value={user.phone}
              name="phone"
              onChange={handleInput}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CallIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item={true} xs={12} md={7}>
            <InputLabel> Date of Birth</InputLabel>
            <TextField
              id="dob"
              type="date"
              value={user.dob}
              name="dob"
              onChange={handleInput}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item={true} xs={12} md={3}>
            <InputLabel> Blood Group </InputLabel>
            <Select
              id="select"
              value={user.bloodGroup}
              name="bloodGroup"
              onChange={handleInput}
              size="small"
              fullWidth
            >
              <MenuItem value="Choose group" disabled>
                Choose group
              </MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
            </Select>
          </Grid>
          <Grid item={true} xs={12} md={7}>
            <InputLabel> E-mail</InputLabel>
            <TextField
              id="email"
              type="email"
              size="small"
              value={user.email}
              name="email"
              onChange={handleInput}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item={true} xs={12} md={7}>
            <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
          </Grid>
          <Grid item={true} xs={12} md={7}>
            <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
