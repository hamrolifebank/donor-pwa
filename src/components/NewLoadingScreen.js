import PropTypes from "prop-types";
import { m } from "framer-motion";

import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

import React from "react";
import Image from "next/image";

const RootStyle = styled("div")(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

NewLoadingScreen.propTypes = {
  isDashboard: PropTypes.bool,
};

export default function NewLoadingScreen({ ...other }) {
  return (
    <>
      {
        <RootStyle {...other}>
          <m.div
            animate={{
              scale: [1, 0.9, 0.9, 1, 1],
              opacity: [1, 0.48, 0.48, 1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
              repeat: Infinity,
            }}
          >
            <Image
              src="/assets/images/loading.png"
              alt="Loading..."
              width={240}
              height={163}
            ></Image>
          </m.div>
          <CircularProgress />
        </RootStyle>
      }
    </>
  );
}
