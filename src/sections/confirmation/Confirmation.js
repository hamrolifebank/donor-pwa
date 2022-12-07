import { styled } from "@mui/material/styles";
import { Box, Stack, Typography, Container } from "@mui/material";
import Iconify from "@components/iconify";

const RootStyle = styled("div")(() => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Confirmation() {
  return (
    <Container>
      <RootStyle>
        <Box sx={{ textAlign: "center" }}>
          <Iconify icon="mdi:check-decagram" sx={{ color: "success.main" }} />
          <Stack gap={1}>
            <Typography variant="h3" sx={{ color: "grey.700" }}>
              Your have been sucessfully registered.
            </Typography>
          </Stack>
        </Box>
      </RootStyle>
    </Container>
  );
}
