import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "@mui/lab";

import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/system";
import { PieChart } from "@components/charts";
import { Grid } from "@mui/material";
import { LegendButton } from "@components/Button";
import { useAppContext } from "@contexts/AppContext";
import { PIECHARTCOLORS } from "@config";
// function TabPanel(props) {
//   const { events, stats, isGraphDataAvailable } = useAppContext();

//   const { children, value, index, ...other } = props;

//   return (
//     <>
//       {stats.map((group, index) => {
//         return (
//           <div
//             key={index}
//             role="tabpanel"
//             hidden={value !== group.groupBy}
//             id={`simple-tabpanel-${group.groupBy}`}
//             aria-labelledby={`simple-tab-${group.groupBy}`}
//             {...other}
//           >
//             {value === group.groupBy && (
//               <Box sx={{ p: 3 }}>
//                 <Typography variant="subtitle2">{children}</Typography>
//               </Box>
//             )}
//           </div>
//         );
//       })}
//     </>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(groupBy) {
//   return {
//     id: `simple-tab-${groupBy}`,
//     "aria-controls": `simple-tabpanel-${groupBy}`,
//   };
// }

export default function DisplayGraph(props) {
  const { events, stats, isGraphDataAvailable } = useAppContext();

  const [value, setValue] = React.useState("bloodGroup");
  const [chartData, setChartData] = React.useState([
    { title: "A+", value: 15, color: "#FFAB00" },
    { title: "A-", value: 40, color: "#CF3D3C" },
    { title: "B+", value: 35, color: "#00B8D9" },
    { title: "O-", value: 10, color: "#FF5630" },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value="bloodGroup"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {stats.map((group, index) => {
              return (
                <>
                  <Tab label={group.label} {...a11yProps(group.groupBy)} />
                </>
              );
            })}
          </Tabs>
        </Box>
        {stats.map((group, index) => {
          return (
            <>
              <TabPanel key={index} value={group.groupBy} index={group.groupBy}>
                <Box>
                  <PieChart data={group.data} />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Box>
                    <Grid container spacing={2}>
                      {group.data.map((data, index) => {
                        return (
                          <Grid item key={index}>
                            <LegendButton
                              bgcolor={PIECHARTCOLORS[data.label]}
                            />
                            <Typography variant="subtitle3">
                              {data.label}
                            </Typography>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </TabPanel>
            </>
          );
        })}
      </Box>
    </Container>
  );
}
