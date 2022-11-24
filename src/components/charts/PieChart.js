import merge from "lodash/merge";
// components
import ReactApexChart, { BaseOptionChart } from "@components/chart";

export default function ChartPie({ data, labels }) {
  const CHART_DATA = data;
  const chartOptions = merge(BaseOptionChart(), {
    labels: labels,
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
    },
    stroke: { show: false },
    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      textAnchor: "middle",
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "0.8rem",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  });

  return (
    <ReactApexChart
      type="pie"
      series={CHART_DATA}
      options={chartOptions}
      width={250}
    />
  );
}
