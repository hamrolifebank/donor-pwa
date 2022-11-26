import { Grid, Paper, Typography, Button, IconButton } from "@mui/material";
import { useAppAuthContext } from "@contexts/AuthContext";
import { TabPanel } from "@mui/lab";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

export default function TabPanel2() {
  const { user } = useAppAuthContext();
  let { events } = user;
  const [next, setNext] = useState(10);

  const loadMore = () => {
    setNext(next + 10);
  };

  const deleteManaullyAddedEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicked");
  };

  const currDate = new Date();

  events = events.sort((a, b) => b.isVerified - a.isVerified);

  return (
    <div>
      <TabPanel value="2" sx={{ p: "10px" }}>
        {events?.slice(0, next)?.map((event) =>
          new Date(event.date) < currDate ? (
            <div key={event.id}>
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
                        color={event.isVerified ? "blue" : "grey"}
                        height="22px"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="subtitle1">{event.name}</Typography>

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
                    <Grid item xs={1}>
                      {event.manuallyAdded ? (
                        <IconButton
                          sx={{ height: 10 }}
                          onClick={deleteManaullyAddedEvent}
                        >
                          <CancelRoundedIcon />
                        </IconButton>
                      ) : null}
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </div>
          ) : null
        )}
        <Box display="flex" justifyContent="center">
          {next < events?.length && (
            <Button onClick={loadMore}> Load more.. </Button>
          )}
        </Box>
      </TabPanel>
    </div>
  );
}
