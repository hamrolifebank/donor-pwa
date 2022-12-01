import PropTypes from "prop-types";
// @mui
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Avatar, Divider, Typography, Stack } from "@mui/material";
import SvgColor from "./SvgColor";
import Image from "./Image";
import { BorderlessButton } from "@components/Button";
import { useRouter } from "next/router";

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
  const { fullname, bloodGroup } = user;
  const { push, pathname } = useRouter();

  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: 0,
        boxShadow: 0,
      }}
    >
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
          alt={fullname}
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

        {/* <StyledOverlay /> */}
        <Box sx={{ position: "relative" }}>
          <Image
            src="/assets/images/minions.jpg"
            alt="cover"
            ratio="16/9"
            sx={{}}
          />
          {pathname === "/profile" ? (
            <BorderlessButton
              sx={{
                color: "white",
                position: "absolute",
                top: "5%",
                left: "72%",
              }}
              onClick={() => push("/profile/edit")}
            >
              Edit profile
            </BorderlessButton>
          ) : null}
        </Box>
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6, mb: 0.5 }}>
        {fullname}
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {bloodGroup}
      </Typography>
    </Card>
  );
}
