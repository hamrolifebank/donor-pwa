import { EventCardRegistered } from "@sections/event-card";
import { useAppAuthContext } from "@contexts/AuthContext";
import { TabPanel } from "@mui/lab";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";

export default function TabPanel1() {
  const { user } = useAppAuthContext();
  const { events } = user;
  const [next, setNext] = useState(10);

  const loadMore = () => {
    setNext(next + 10);
  };
  return (
    <div>
      <TabPanel value="1" sx={{ p: "10px" }}>
        {events?.slice(0, next)?.map((event) =>
          event.isRegistered ? (
            <div key={event.id}>
              <Link
                href={`/events/${event.id}`}
                style={{ textDecoration: "none" }}
              >
                <EventCardRegistered event={event} />
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
