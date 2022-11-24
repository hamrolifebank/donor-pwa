import React, { useState } from "react";
import { Box } from "@mui/system";
import { useAppAuthContext } from "@contexts/AuthContext";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Tab,
  IconButton,
} from "@mui/material";
import { PrimaryButton } from "@components/Button";
import { Icon } from "@iconify/react";
import ChartRadialBar from "./Radial";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "next/link";
import { useRouter } from "next/router";
import { PATH_ADDDONATION } from "@routes/paths";
import { EventCardRegistered } from "@components/event-card";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const Donations = () => {
  const { push } = useRouter();
  const { user } = useAppAuthContext();
  const { events } = user;

  const [value, setValue] = React.useState("1");
  const [next, setNext] = useState(10);

  const loadMore = () => {
    setNext(next + 10);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onAddDonation = () => {
    push(PATH_ADDDONATION.addDonations);
  };

  // var verifiedClr = event.isVerified  ? "blue" : "grey";

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
      <Box>
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
          <TabPanel value="1" sx={{ p: "10px" }}>
            {events?.slice(0, next)?.map((event) =>
              event.isRegistered ? (
                <Link
                  href={`/events/${event.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <EventCardRegistered event={event} />
                </Link>
              ) : null
            )}
            <Box display="flex" justifyContent="center">
              {next < events?.length && (
                <Button onClick={loadMore}> Load more.. </Button>
              )}
            </Box>
          </TabPanel>
          <TabPanel value="2" sx={{ p: "10px" }}>
            {events?.slice(0, next)?.map((event) =>
              event.isVerified ? (
                <Link
                  href={`/events/${event.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Paper
                    sx={{
                      mb: 2,
                      p: "10px 0px 10px 10px",
                      backgroundColor: "grey.200",
                    }}
                  >
                    <Grid container item xs={12} gap={1}>
                      <Grid item xs={1}>
                        <Icon
                          icon="material-symbols:verified"
                          color="blue"
                          height="22px"
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="subtitle1">
                          {event.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "subtitle2.fontSize",
                            color: "grey.600",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Icon icon="mdi:clock-time-eight-outline" />
                          {event.date.slice(0, 10)}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "subtitle2.fontSize",
                            display: "flex",
                            gap: 1,
                            alignItems: "center",
                            textDecoration: "underline",
                            color: "primary.main",
                          }}
                        >
                          <Icon icon="material-symbols:location-on" />
                          {event.location}
                        </Typography>
                      </Grid>
                      <Grid xs={1}>
                        <IconButton sx={{ height: 10 }}>
                          <CancelRoundedIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Paper>
                </Link>
              ) : null
            )}
            <Box display="flex" justifyContent="center">
              {next < events?.length && (
                <Button onClick={loadMore}> Load more.. </Button>
              )}
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default Donations;
