import React from "react";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

import styles from "./History.module.css";

const History = ({ historyData, countryName, flag }) => {
  const history = historyData();
  const countryFlag = flag();

  // If historical data for the country is not available.
  if (history.message) {
    return (
      <Typography variant="h4" align="center" className={styles.heading}>
        {`Historical Data for ${countryName} is not available.`}
      </Typography>
    );
  }

  const data = {
    labels: history.dates,
    datasets: [
      {
        data: history.confirmed,
        label: "Confirmed",
        borderColor: "rgb(255, 115, 0)",
        backgroundColor: "rgba(255, 115, 0, 0.1)",
        fill: true,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2,
        pointBorderColor: "rgba(255, 115, 0, 1)",
        pointHoverBorderColor: "white",
        pointBackgroundColor: "rgba(255, 115, 0, 1)",
        pointHoverBackgroundColor: "rgba(255, 115, 0, 1)",
        pointHitRadius: 10,
      },
      {
        data: history.active,
        label: "Active",
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        fill: true,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2,
        pointBorderColor: "blue",
        pointHoverBorderColor: "white",
        pointBackgroundColor: "blue",
        pointHoverBackgroundColor: "blue",
        pointHitRadius: 10,
      },
      {
        data: history.recovered,
        label: "Recovered",
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        fill: true,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2,
        pointBorderColor: "green",
        pointHoverBorderColor: "white",
        pointBackgroundColor: "green",
        pointHoverBackgroundColor: "green",
        pointHitRadius: 10,
      },
      {
        data: history.deaths,
        label: "Deaths",
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        fill: true,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2,
        pointBorderColor: "red",
        pointHoverBorderColor: "white",
        pointBackgroundColor: "red",
        pointHoverBackgroundColor: "red",
        pointHitRadius: 10,
      },
    ],
  };

  const labelClickHandler = function (e, legendItem) {
    var index = legendItem.datasetIndex;
    var ci = this.chart;
    var meta = ci.getDatasetMeta(index);

    // See controller.isDatasetVisible comment
    meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

    // We hid a dataset ... rerender the chart
    ci.update();
  };

  const label = {
    display: true,
    position: "bottom",
    fullWidth: true,
    reverse: false,
    onClick: labelClickHandler,
  };

  return (
    <div className={styles.container}>
      <Typography variant="h4" align="center" className={styles.heading}>
        {`Historical Data for ${countryName}`}
        <img src={countryFlag} alt="Country Flag" className={styles.flag} />
      </Typography>
      <Line data={data} legend={label} />
      <Typography variant="subtitle2" color="textSecondary">
        * Click legends to show/hide relevant graph.
      </Typography>
    </div>
  );
};

export default History;
