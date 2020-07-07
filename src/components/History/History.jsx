import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';

import styles from './History.module.css';

const History = ({ history, country, flag }) => {
    const historyData = history();
    const countryFlag = flag();

    const data={
        labels: historyData.dates,
        datasets: [{
            data: historyData.confirmed,
            label: 'Confirmed',
            borderColor: 'rgb(255, 115, 0)',
            backgroundColor: 'rgba(255, 115, 0, 0.1)',
            fill: true,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            pointHoverBorderWidth: 2,
            pointBorderColor: 'rgba(255, 115, 0, 1)',
            pointHoverBorderColor: 'white',
            pointBackgroundColor: 'rgba(255, 115, 0, 1)',
            pointHoverBackgroundColor: 'rgba(255, 115, 0, 1)',
            pointHitRadius: 10,
        }, {
            data: historyData.active,
            label: 'Active',
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            fill: true,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            pointHoverBorderWidth: 2,
            pointBorderColor: 'blue',
            pointHoverBorderColor: 'white',
            pointBackgroundColor: 'blue',
            pointHoverBackgroundColor: 'blue',
            pointHitRadius: 10,
        }, {
            data: historyData.recovered,
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: true,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            pointHoverBorderWidth: 2,
            pointBorderColor: 'green',
            pointHoverBorderColor: 'white',
            pointBackgroundColor: 'green',
            pointHoverBackgroundColor: 'green',
            pointHitRadius: 10,
        }, {
            data: historyData.deaths,
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            fill: true,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            pointHoverBorderWidth: 2,
            pointBorderColor: 'red',
            pointHoverBorderColor: 'white',
            pointBackgroundColor: 'red',
            pointHoverBackgroundColor: 'red',
            pointHitRadius: 10,
        }],
    }

    return (
        !historyData.dates 
        ? 
            <div>
                <Typography variant="h4" align="center" className={styles.heading}>
                    {`Historical Data for ${country} is not available.`}
                </Typography>
            </div> 
        :  
            <div className={styles.container}>
                <Typography variant="h4" align="center" className={styles.heading}>
                    {`Historical Data for ${country}`}
                    <img src={countryFlag} alt="Country Flag" className={styles.flag}/>
                </Typography>
                <Line data={data} />
            </div>
    )
}

export default History;