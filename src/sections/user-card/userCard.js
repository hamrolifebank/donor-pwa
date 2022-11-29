import PropTypes from "prop-types";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Avatar, Divider, Typography, Stack } from "@mui/material";
import SvgColor from "./SvgColor";
import Image from "./image/Image";

// utils

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 8,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

// ----------------------------------------------------------------------

UserCard.propTypes = {
  user: PropTypes.object,
};

export default function UserCard({ user }) {
  const { name, cover, role, follower, totalPosts, avatarUrl, following } =
    user;

  return (
    <Card sx={{ textAlign: "center", borderRadius: 0, boxShadow: 0 }}>
      <Box sx={{ position: "relative" }}>
        <SvgColor
          src="/assets/shape_avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            left: 0,
            right: 0,
            bottom: -26,
            mx: "auto",
            position: "absolute",
            color: "background.paper",
          }}
        />

        <Avatar
          alt={name}
          src={`https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_2.jpg`}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: "auto",
            position: "absolute",
          }}
        />

        <StyledOverlay />
        <Image src="/assets/images/minions.jpg" alt={cover} ratio="16/9" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6, mb: 0.5 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {role}
      </Typography>
    </Card>
  );
}
