// @mui
import { useTheme } from "@mui/material/styles";
// utils
import { fNumber } from "../../utils/formatNumber";
// components
import Chart, { useChart } from "../../components/chart";

// ----------------------------------------------------------------------

const series = [90, 65];

export default function ChartRadialBar() {
  const theme = useTheme();

  const chartOptions = useChart({
    labels: ["Donation", "Pints"],
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          [
            { offset: 0, color: theme.palette.primary.light },
            { offset: 100, color: theme.palette.primary.main },
          ],
          [
            { offset: 0, color: theme.palette.info.light },
            { offset: 100, color: theme.palette.info.main },
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
            label: "5000",
            formatter: () => fNumber(2324),
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
