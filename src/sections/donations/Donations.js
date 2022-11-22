import { Box } from "@mui/system";
import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 90;
const Donations = () => {
  return (
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
  );
};

export default Donations;
