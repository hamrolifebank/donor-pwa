import PropTypes from "prop-types";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";
import Head from "next/head";
import { APP_NAME } from "@config";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | ${APP_NAME}`}</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />

      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
