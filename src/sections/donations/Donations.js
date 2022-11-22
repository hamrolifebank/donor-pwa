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

const Donations = () => {
  const theme = useTheme();
  const { user } = useAppAuthContext();
  const { events } = user;

  return (
    <Container>
      <Grid container item xs={12} gap={6} margin={1}>
        <Grid item xs={6}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Pints Donated
          </Typography>
          <PrimaryButton> Add donation </PrimaryButton>
        </Grid>
        <Grid item xs={3}>
          <RadialChart />
        </Grid>
      </Grid>

      <hr style={{ border: "0.5px dashed black" }} />
      <Breadcrumbs display="flex" gap={2} justify-content="center">
        <Link underline="hover">
          <Icon icon="material-symbols:event-note" />
          My events{" "}
        </Link>
        <Link underline="hover">
          <Typography>
            <Icon icon="material-symbols:event-available" />
            Past events
          </Typography>
        </Link>
      </Breadcrumbs>
      <Box>
        {events.map((event) => (
          <Paper
            key={event.id}
            sx={{ m: 1, p: 2, background: theme.palette.grey[300] }}
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
