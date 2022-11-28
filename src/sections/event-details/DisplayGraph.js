import * as React from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/system";
import { PieChart } from "@components/charts";
// import { Grid } from "@mui/material";
// import { LegendButton } from "@components/Button";
import { useAppContext } from "@contexts/AppContext";
import { PIECHARTCOLORS } from "@config";

export default function DisplayGraph(props) {
  const { events, stats, isGraphDataAvailable } = useAppContext();
  const [value, setValue] = React.useState(stats[0].groupBy);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      {isGraphDataAvailable ? (
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {stats.map((group, index) => {
                return (
                  <Tab key={index} label={group.label} value={group.groupBy} />
                );
              })}
            </TabList>
          </Box>
          {stats.map((group, index) => {
            return (
              <TabPanel key={index} value={group.groupBy}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <PieChart
                    data={group.data.map((data) => data.value)}
                    labels={group.data.map((data) => data.label)}
                  />
                </Box>
              </TabPanel>
            );
          })}
        </TabContext>
      ) : (
        <Box></Box>
      )}
    </Container>
  );
}
