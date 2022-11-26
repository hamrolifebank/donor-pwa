import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner(props) {
  const [data, setData] = useState("No result");

  return (
    <Container>
      <Typography variant="h3" display="flex" justifyContent="center">
        Scan QR
      </Typography>
      <QrReader
        delay={100}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: 1 }}
      />
      <Box display="flex" justifyContent="center">
        <Typography sx={{ pl: 2 }} variant="h7">
          {data}
        </Typography>
      </Box>
    </Container>
  );
}
