// @mui
import { useTheme } from "@mui/material/styles";
// utils
import { fNumber } from "../../utils/formatNumber";
// components
import Chart, { useChart } from "../../components/chart";
import { useAppAuthContext } from "@contexts/AuthContext";

// ----------------------------------------------------------------------

export default function ChartRadialBar() {
  const theme = useTheme();
  const { user } = useAppAuthContext();
  const { events } = user;

  let pintsOfVerified = [];
  let pintsOfUnVerified = [];

  const allPintsVerified = () => {
    events.map((event) =>
      event.isVerified ? pintsOfVerified.push(event.pints) : null
    );
  };
  const allPintsUnVerified = () => {
    events.map((event) =>
      event.manuallyAdded ? pintsOfUnVerified.push(event.pints) : null
    );
  };
  allPintsVerified();
  allPintsUnVerified();

  const totalVerifiedPints = pintsOfVerified.reduce((a, b) => a + b);
  const totalUnVerifiedPints = pintsOfUnVerified.reduce((a, b) => a + b);
  const total = totalUnVerifiedPints + totalVerifiedPints;

  const series = [totalVerifiedPints, totalUnVerifiedPints];

  const chartOptions = useChart({
    labels: ["Verified", "Unverified"],
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          [
            { offset: 0, color: theme.palette.primary.light },
            { offset: 1000, color: theme.palette.primary.main },
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
            formatter: function (val) {
              const percent = val / 1;
              return percent.toFixed(0);
            },
          },

          total: {
            formatter: () => fNumber(total),
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
