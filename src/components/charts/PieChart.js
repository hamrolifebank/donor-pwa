import React from "react";
import { Box } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";

const PieChartView = (props) => {
  const data = [
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
    { title: "Three", value: 20, color: "#6A2135" },
  ];

  return (
    <Box>
      <PieChart data={data} />
    </Box>
  );
};

export default PieChartView;
