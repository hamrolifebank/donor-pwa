import React from "react";
import { Box } from "@mui/system";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { PrimaryButton } from "@components/Button";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import ChartRadialBar from "./Radial";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useRouter } from "next/router";
import { PATH_ADDDONATION } from "@routes/paths";

const Donations = () => {
  const theme = useTheme();
  const { push } = useRouter();
  const { user } = useAppAuthContext();
  const { events } = user;

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onAddDonation = () => {
    push(PATH_ADDDONATION.addDonations);
  };

  return (
    <Container>
      <Grid container item xs={12} gap={2}>
        <Grid item xs={7} sx={{ mt: 5 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Pints Donated
          </Typography>
          <PrimaryButton sx={{ width: 130 }} onClick={onAddDonation}>
            Add donation{" "}
          </PrimaryButton>
        </Grid>
        <Grid item xs={4}>
          <ChartRadialBar />
        </Grid>
      </Grid>

      <hr style={{ border: "0.5px dashed black" }} />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab
                label="My events"
                value="1"
                icon={<Icon icon="material-symbols:event-note" height={22} />}
                iconPosition="start"
              />

              <Tab
                label="Past events"
                value="2"
                icon={
                  <Icon icon="material-symbols:event-available" height={22} />
                }
                iconPosition="start"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            {events.map((event) =>
              event.isRegistered ? (
                <Paper
                  key={event.id}
                  sx={{ mb: 1, p: 2, background: theme.palette.grey[200] }}
                >
                  <div>{event.name}</div>
                  <div>{event.date}</div>
                  <div>{event.location}</div>
                </Paper>
              ) : null
            )}
          </TabPanel>
          <TabPanel value="2">
            {events.map((event) =>
              event.isVerified ? (
                <Paper
                  key={event.id}
                  sx={{ mb: 1, p: 2, background: theme.palette.grey[200] }}
                >
                  logo
                  <div>{event.name}</div>
                  <div>{event.date}</div>
                  <div>{event.location}</div>
                </Paper>
              ) : null
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default Donations;
