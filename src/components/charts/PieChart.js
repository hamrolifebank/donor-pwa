// import React from "react";
// import { Box } from "@mui/material";
// import { PieChart } from "react-minimal-pie-chart";
// import { useTheme } from "@emotion/react";

// const PieChartView = (props) => {
//   const theme = useTheme();
//   return (
//     <Box>
//       <PieChart
//         data={props.data}
//         label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
//         labelStyle={(index) => ({
//           fill: theme.palette.grey[0],
//           fontSize: "0.3em",
//         })}
//         segmentsTabIndex={4}
//         segmentsStyle={(segmentsIndex) => {
//           fill: theme.palette.grey[800];
//         }}
//         labelPosition={55}
//         animate
//         animationDuration={500}
//         animationEasing="linear"
//         center={[50, 50]}
//         radius={30}
//         viewBoxSize={[100, 100]}
//       />
//     </Box>
//   );
// };

// export default PieChartView;
