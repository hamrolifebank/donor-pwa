import React from "react";
import { Box } from "@mui/system";
import { Container, Grid, Typography, Tab } from "@mui/material";
import { PrimaryButton } from "@components/Button";
import { Icon } from "@iconify/react";
import ChartRadialBar from "./Radial";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useRouter } from "next/router";
import { PATH_ADDDONATION } from "@routes/paths";
import TabPanel1 from "./TabPanel1";
import TabPanel2 from "./TabPanel2";

const Donations = () => {
  const { push } = useRouter();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onAddDonation = () => {
    push(PATH_ADDDONATION.addDonations);
  };

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
          <TabPanel1 />
          <TabPanel2 />
        </TabContext>
      </Box>
    </Container>
  );
};

export default Donations;
