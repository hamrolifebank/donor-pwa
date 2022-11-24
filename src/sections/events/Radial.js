// @mui
import { useTheme } from "@mui/material/styles";
// utils
import { fNumber } from "@utils/formatNumber";
// components
import Chart, { useChart } from "@components/chart";

// ----------------------------------------------------------------------

const series = [44];

export default function ChartRadialBar() {
  const theme = useTheme();

  const chartOptions = useChart({
    chart: {
      width: "1000",
    },
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [[{ offset: 0, color: "#5BE584" }]],
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
          enabled: false,
          name: {
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: 12,
          },
          total: {
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
      height={150}
      fullwidth
    />
  );
}
