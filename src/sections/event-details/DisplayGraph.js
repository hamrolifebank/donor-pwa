import * as React from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Container, Box } from "@mui/system";
import { PieChart } from "@components/charts";
// import { Grid } from "@mui/material";
// import { LegendButton } from "@components/Button";
import { useRouter } from "next/router";
import { useEventContext } from "@contexts/EventContext";

export default function DisplayGraph(props) {
  const { stats, isGraphDataAvailable, fetchEventDetails } = useEventContext();
  const router = useRouter();
  const [value, setValue] = React.useState(stats[0].groupBy);

  React.useEffect(() => {
    if (router.isReady) fetchEventDetails(router.query.slug);
  }, [router.isReady]);

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
                    data={group.data.map((data) => data.count)}
                    labels={group.data.map((data) => {
                      if (data.group) {
                        return data.group;
                      } else if (data.range) {
                        return data.range;
                      } else if (data.display) {
                        return data.display;
                      }
                    })}
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
