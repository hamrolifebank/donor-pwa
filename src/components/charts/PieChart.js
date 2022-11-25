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
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "subtitle3",
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 15,
        height: 15,
        strokeWidth: 0,
        strokeColor: "#fff",
        radius: 0,
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
      style: {
        fontSize: "0.7rem",
      },
    },
    plotOptions: {
      pie: { dataLabels: { offset: -15 }, donut: { labels: { show: false } } },
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
