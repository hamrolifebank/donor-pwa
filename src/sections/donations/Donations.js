import React from "react";
import { Box } from "@mui/system";
import { useAppAuthContext } from "@contexts/AuthContext";
import {
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { PrimaryButton } from "@components/Button";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import RadialChart from "./RadialChart";
import ChartRadialBar from "./Radial";

const Donations = () => {
  const theme = useTheme();
  const { user } = useAppAuthContext();
  const { events } = user;

  return (
    <Container>
      <Grid container item xs={12} gap={2}>
        <Grid item xs={7} sx={{ mt: 5 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Pints Donated
          </Typography>
          <PrimaryButton sx={{ width: 130 }}> Add donation </PrimaryButton>
        </Grid>
        <Grid item xs={4}>
          <ChartRadialBar />
        </Grid>
      </Grid>

      <hr style={{ border: "0.5px dashed black" }} />
      <Breadcrumbs separator="|">
        <Link underline="hover" display="flex" gap={1}>
          <Icon icon="material-symbols:event-note" height={22} />
          <Typography variant="h6">My events</Typography>
        </Link>

        <Link underline="hover" display="flex" gap={1}>
          <Icon icon="material-symbols:event-available" height={22} />
          <Typography variant="h6">Past events</Typography>
        </Link>
      </Breadcrumbs>

      <Box>
        {events.map((event) => (
          <Paper
            key={event.id}
            sx={{ m: 1, p: 2, background: theme.palette.grey[200] }}
          >
            <div>{event.name}</div>
            <div>{event.date}</div>
            <div>{event.location}</div>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Donations;
