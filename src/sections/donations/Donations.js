import { Box } from "@mui/system";
import { useAppAuthContext } from "@contexts/AuthContext";
import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 90;
const Donations = () => {
  const { user } = useAppAuthContext();
  const { events } = user;
  return (
    <>
      <Box width={100} height={100}>
        <CircularProgressbarWithChildren
          value={75}
          styles={buildStyles({
            pathColor: "#f00",
            trailColor: "#000000",
          })}
        >
          <div style={{ width: "84%" }}>
            <CircularProgressbar value={60} text={`${percentage}`} />
          </div>
        </CircularProgressbarWithChildren>
      </Box>
      <div>
        {events.map((event) => (
          <>
            <div key={event.id}>
              <div>{event.name}</div>
              <div>{event.date}</div>
              <div>{event.location}</div>
            </div>
            <br />
          </>
        ))}
      </div>
    </>
  );
};

export default Donations;
