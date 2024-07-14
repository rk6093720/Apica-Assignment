import React, { useEffect, useRef } from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";

const MainChart = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    document.documentElement.addEventListener("ColorSchemeChange", () => {
      if (chartRef.current) {
        setTimeout(() => {
          chartRef.current.options.scales.x.grid.borderColor = getStyle(
            "--cui-border-color-translucent"
          );
          chartRef.current.options.scales.x.grid.color = getStyle(
            "--cui-border-color-translucent"
          );
          chartRef.current.options.scales.x.ticks.color =
            getStyle("--cui-body-color");
          chartRef.current.options.scales.y.grid.borderColor = getStyle(
            "--cui-border-color-translucent"
          );
          chartRef.current.options.scales.y.grid.color = getStyle(
            "--cui-border-color-translucent"
          );
          chartRef.current.options.scales.y.ticks.color =
            getStyle("--cui-body-color");
          chartRef.current.update();
        });
      }
    });
  }, [chartRef]);

  const random = () => Math.round(Math.random() * 100);

  return (
    <div>
      <CChartLine
        ref={chartRef}
        style={{ height: "300px", marginTop: "40px" }}
        data={{
          // change from month to time
          labels: [
            "8:00 Am",
            "9:00 Am",
            "10:00 Am",
            "11:00 Am",
            "12:00 Am",
            "01:00 Am",
            "02:00 Am",
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: `rgba(${getStyle("--cui-info-rgb")}, .1)`,
              borderColor: getStyle("--cui-info"),
              pointHoverBackgroundColor: getStyle("--cui-info"),
              borderWidth: 2,
              data: [
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
              ],
              fill: true,
            },
            {
              label: "My Second dataset",
              backgroundColor: "transparent",
              borderColor: getStyle("--cui-success"),
              pointHoverBackgroundColor: getStyle("--cui-success"),
              borderWidth: 2,
              data: [
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
                random(50, 200),
              ],
            },
            {
              label: "My Third dataset",
              backgroundColor: "transparent",
              borderColor: getStyle("--cui-danger"),
              pointHoverBackgroundColor: getStyle("--cui-danger"),
              borderWidth: 1,
              borderDash: [8, 5],
              data: [65, 65, 65, 65, 65, 65, 65],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          // here we are change from scales to person are visting event
          scales: {
            x: {
              grid: {
                color: getStyle("--cui-border-color-translucent"),
                drawOnChartArea: false,
              },
              ticks: {
                color: getStyle("--cui-body-color"),
              },
            },
            y: {
              beginAtZero: true,
              border: {
                color: getStyle("--cui-border-color-translucent"),
              },
              grid: {
                color: getStyle("--cui-border-color-translucent"),
              },
              max: 10000,
              ticks: {
                color: getStyle("--cui-body-color"),
                maxTicksLimit: 6,
                stepSize: Math.ceil(200 / 5),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </div>
  );
};

export default MainChart;
