// @mui
import { useTheme } from "@mui/material/styles";
// utils
import { fNumber } from "../../utils/formatNumber";
// components
import Chart, { useChart } from "../../components/chart";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useEffect } from "react";

// ----------------------------------------------------------------------

export default function ChartRadialBar() {
  const { user } = useAppAuthContext();
  const { events } = user;

  const varifiedPints = [];
  const unVerifiedPints = [];

  const allVerifiedPints = () => {
    return events.map(
      (event) =>
        event.isVerified ? varifiedPints.push(event.pintsDonated) : null
      // console.log(event.pintsDonated)
    );
  };

  const allUnVerifiedPints = () => {
    return events.map(
      (event) =>
        event.manuallyAdded ? unVerifiedPints.push(event.pintsDonated) : null
      // console.log(event.pintsDonated)
    );
  };

  allVerifiedPints();
  allUnVerifiedPints();

  console.log(varifiedPints);
  console.log(unVerifiedPints);
  const series = [varifiedPints, 65];
  const theme = useTheme();

  const chartOptions = useChart({
    labels: ["verified", "unVerified"],
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          [
            { offset: 0, color: theme.palette.secondary.light },
            { offset: 100, color: theme.palette.secondary.main },
          ],
          [
            { offset: 0, color: theme.palette.grey[200] },
            { offset: 100, color: theme.palette.grey[800] },
          ],
        ],
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "45%",
        },
        dataLabels: {
          value: {
            offsetY: 5,
            fontSize: 10,
          },

          total: {
            // formatter: () => fNumber(2324),
          },
        },
      },
    },
  });

  return (
    <Chart
      type="radialBar"
      series={series}
      options={chartOptions}
      height={180}
      width={140}
    />
  );
}
