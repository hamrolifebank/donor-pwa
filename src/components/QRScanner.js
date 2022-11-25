// import React, { useState } from "react";
// import { QrReader } from "react-qr-reader";

// import { Container } from "@mui/system";

// import { QrCodeScanner } from "@mui/icons-material";

// export default function QRScanner() {
//   const [data, setData] = useState("No data found");
//   return (
//     <>
//       {/* <QrCodeScanner> */}
//       <QrReader
//         delay={100}
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//       />
//       <p>{data}</p>
//     </>
//     // </QrCodeScanner>
//   );
// }

// import React, { Component } from "react";
// import dynamic from "next/dynamic";
// const QrReader = dynamic(
//   () => import("react-qr-reader").then((mod) => mod.QrReader),
//   { ssr: false }
// );
// class QRScanner extends Component {
//   state = {
//     result: "No result",
//   };

//   handleScan = (data) => {
//     if (data) {
//       this.setState({
//         result: data,
//       });
//     }
//   };
//   handleError = (err) => {
//     console.error(err);
//   };
//   render() {
//     return (
//       <div>
//         <QrReader
//           delay={300}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           style={{ width: "100%" }}
//         />
//         <p>{this.state.result}</p>
//       </div>
//     );
//   }
// }
// export default QRScanner;
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner(props) {
  const [data, setData] = useState("No result");

  return (
    <>
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
        style={{ width: "auto - fit" }}
      />
      <Typography variant="h7">{data}</Typography>
    </>
  );
}
