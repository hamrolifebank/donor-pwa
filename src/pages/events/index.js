import React from "react";
import PropTypes from "prop-types";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";

import { EventCard } from "@components/event-card";
import { Container, Typography } from "@mui/material";

const PAGE_TITLE = "Events";
EventsPage.getLayout = (page) => (
  <DashboardlayoutwithFooter pageTitle={PAGE_TITLE}>
    {page}
  </DashboardlayoutwithFooter>
);
export default function EventsPage(props) {
  const events = [
    {
      is_closed: false,
      _id: "634fc82ab6256678c904c82b",
      name: "HLB Donor Center #18",
      team: "5c5b1806cb2d0f8f688d7428",
      contactname: "Hamro LifeBank",
      phone: "9801230045",
      target: "10",
      date: "2022-12-09T00:00:00.000Z",
      startTime: "11:00",
      endTime: "14:00",
      location: "Sanepa, Lalitpur ",
      beneficiary: "5bb6067fd59b444c803c4003",
      slug: "2022-11-04-hlb-donor-center-18",
      owner: "5bb752fac800bb022cee5abe",
      created_by: "5c5fceb6306cb25f1174396b",
      updated_by: "5c5fceb6306cb25f1174396b",
      acl: [],
      created_at: "2022-10-19T09:49:30.574Z",
      updated_at: "2022-11-02T06:40:10.703Z",
      v: 0,
      id: "634fc82ab6256678c904c82b",
    },
    {
      is_closed: false,
      _id: "634fc82ab6256678c904c82b",
      name: "Red Cross #18",
      team: "5c5b1806cb2d0f8f688d7428",
      contactname: "Hamro LifeBank",
      phone: "9801230045",
      target: "10",
      date: "2022-12-09T00:00:00.000Z",
      startTime: "11:00",
      endTime: "14:00",
      location: "Sanepa, Lalitpur ",
      beneficiary: "5bb6067fd59b444c803c4003",
      slug: "2022-11-04-hlb-donor-center-18",
      owner: "5bb752fac800bb022cee5abe",
      created_by: "5c5fceb6306cb25f1174396b",
      updated_by: "5c5fceb6306cb25f1174396b",
      acl: [],
      created_at: "2022-10-19T09:49:30.574Z",
      updated_at: "2022-11-02T06:40:10.703Z",
      v: 0,
      id: "634fc82ab6256678c904c82c",
    },
    {
      is_closed: false,
      _id: "634fc82ab6256678c904c82b",
      name: "Lions Club #18",
      team: "5c5b1806cb2d0f8f688d7428",
      contactname: "Hamro LifeBank",
      phone: "9801230045",
      target: "10",
      date: "2022-12-09T00:00:00.000Z",
      startTime: "11:00",
      endTime: "14:00",
      location: "Sanepa, Lalitpur ",
      beneficiary: "5bb6067fd59b444c803c4003",
      slug: "2022-11-04-hlb-donor-center-18",
      owner: "5bb752fac800bb022cee5abe",
      created_by: "5c5fceb6306cb25f1174396b",
      updated_by: "5c5fceb6306cb25f1174396b",
      acl: [],
      created_at: "2022-10-19T09:49:30.574Z",
      updated_at: "2022-11-02T06:40:10.703Z",
      v: 0,
      id: "634fc82ab6256678c904c82d",
    },
  ];

  return (
    <Container display="flex">
      <Typography
        sx={{
          mb: 1,
          fontSize: "subtitle1.fontSize",
          fontWeight: "subtitle1.fontWeight",
          textAlign: "center",
          textTransform: "uppercase",
          color: "grey.600",
        }}
      >
        Events near you
      </Typography>

      {events.map((event) => (
        <div key={event.id}>
          <EventCard event={event} />
        </div>
      ))}
      <Typography
        variant="h6"
        component="h2"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        Load more events
      </Typography>
    </Container>
  );
}
