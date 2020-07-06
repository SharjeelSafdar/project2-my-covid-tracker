import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';

import styles from './History.module.css';

const History = ({ history, country, flag }) => {
    const historyData = history();
    const countryFlag = flag();

    const lineChart = (
        <Line 
            data={{
                labels: historyData.dates,
                datasets: [{
                    data: historyData.confirmed,
                    label: 'Confirmed',
                    borderColor: 'rgb(255, 115, 0)',
                    backgroundColor: 'rgba(255, 115, 0, 0.1)',
                    fill: true,
                }, {
                    data: historyData.active,
                    label: 'Active',
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    fill: true,
                }, {
                    data: historyData.recovered,
                    label: 'Recovered',
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    fill: true,
                }, {
                    data: historyData.deaths,
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    fill: true,
                }],
            }}
        />
    );

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
                {lineChart}
            </div>
    )
}

export default History;