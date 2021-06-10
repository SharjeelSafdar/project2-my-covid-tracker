import React from "react";
import { Typography } from "@material-ui/core";
import corona from "../../images/coronaLoading.png";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={corona} alt="" className={styles.coronaImage} />
      <Typography variant="h5">Loading Data ...</Typography>
    </div>
  );
};

export default Loading;
