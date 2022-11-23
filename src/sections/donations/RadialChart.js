// import React from "react";
// import {
//   CircularProgressbar,
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { Box } from "@mui/system";
// import { useTheme } from "@emotion/react";

// const percentage = 90;
// export default function RadialChart() {
//   const theme = useTheme();

//   return (
//     <Box width={100} height={100}>
//       <CircularProgressbarWithChildren
//         value={75}
//         styles={buildStyles({
//           pathColor: theme.palette.secondary.main,
//         })}
//       >
//         <div style={{ width: "83%" }}>
//           <CircularProgressbar
//             value={60}
//             text={`${percentage}`}
//             styles={buildStyles({
//               pathColor: theme.palette.primary.main,
//             })}
//           />
//         </div>
//       </CircularProgressbarWithChildren>
//     </Box>
//   );
// }
