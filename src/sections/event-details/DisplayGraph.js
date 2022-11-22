import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/system";
import { PieChart } from "@components/charts";
import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";
import { LegendButton } from "@components/Button";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="subtitle2">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DisplayGraph() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [chartData, setChartData] = React.useState([
    { title: "A+", value: 15, color: "#FFAB00" },
    { title: "A-", value: 40, color: "#CF3D3C" },
    { title: "B+", value: 35, color: "#00B8D9" },
    { title: "O-", value: 10, color: "#FF5630" },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setChartData([
        { title: "A+", value: 15, color: "#FFAB00" },
        { title: "A-", value: 40, color: "#CF3D3C" },
        { title: "B+", value: 35, color: "#00B8D9" },
        { title: "O-", value: 10, color: "#FF5630" },
      ]);
    } else if (newValue === 1) {
      setChartData([
        { title: "A+", value: 15, color: "#FFAB00" },
        { title: "A-", value: 40, color: "#CF3D3C" },
      ]);
    } else {
      setChartData([
        { title: "A+", value: 45, color: "#FFAB00" },
        { title: "A-", value: 25, color: "#CF3D3C" },
        { title: "B+", value: 30, color: "#00B8D9" },
      ]);
    }
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Blood Group" {...a11yProps(0)} />
            <Tab label="Age Group" {...a11yProps(1)} />
            <Tab label="Gender" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box>
            <PieChart data={chartData} />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box>
              <Grid container spacing={2}>
                {chartData.map((data, index) => {
                  return (
                    <Grid item key={index}>
                      <LegendButton bgcolor={data.color} />
                      <Typography variant="subtitle3">{data.title}</Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PieChart data={chartData} />
          <Grid container spacing={2}>
            {chartData.map((data, index) => {
              return (
                <Grid item key={index}>
                  <LegendButton bgcolor={data.color} />
                  <Typography variant="subtitle3">{data.title}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PieChart data={chartData} />
          <Grid container spacing={2}>
            {chartData.map((data, index) => {
              return (
                <Grid item key={index}>
                  <LegendButton bgcolor={data.color} />
                  <Typography variant="subtitle3">{data.title}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      </Box>
    </Container>
  );
}
