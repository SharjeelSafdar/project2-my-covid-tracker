import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Grid, Typography } from '@material-ui/core';
import { globalContext } from './../../context/context';

import styles from './CurrentStats.module.css';

const CurrentStats = () => {
    const { data } = useContext(globalContext);
    let recoveryRate = (data.recovered / (data.cases - data.active) * 100).toFixed(2);
    let deathRate = (data.deaths / (data.cases - data.active) * 100).toFixed(2);
    const statsDoughnut = (
        !data.cases ? null :
        <Doughnut 
            width={150}
            data={{
                labels: [ 'Active', 'Recovered', 'Deaths' ],
                datasets: [{
                    data: [ data.active, data.recovered, data.deaths ],
                    backgroundColor: [
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)'
                    ],
                }]
            }}
            legend={{
                display: true,
                position: 'bottom',
                fullWidth: true,
                reverse: false,
                onClick: () => {}
            }}
        />
    );

    const ratesDoughnut = (
        !data.cases ? null :
        <Doughnut 
            width={150}
            data={{
                labels: [ 'Recovery Rate (%)', 'Death Rate (%)' ],
                datasets: [{
                    data: [ recoveryRate, deathRate ],
                    backgroundColor: [ 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],
                }]
            }}
            legend={{
                display: true,
                position: 'bottom',
                fullWidth: true,
                reverse: false,
                onClick: () => {}
            }}
        />
    );

    return (
        <Grid container spacing={3} justify="center" className={styles.container}>
            <Grid item xs={8} md={4} className={styles.chart}>
                {statsDoughnut}
                <Typography variant="subtitle1" color="textSecondary" className={styles.caption}>
                    {`Total cases: ${data.cases}`}
                </Typography>
            </Grid>
            <Grid item xs={8} md={4} className={styles.chart}>
                {ratesDoughnut}
                <Typography variant="subtitle1" color="textSecondary" className={styles.caption}>
                    {`Total closed cases: ${data.cases - data.active}`}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CurrentStats;