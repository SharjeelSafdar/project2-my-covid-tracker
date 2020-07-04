import React, { useContext, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';

import { fetchHistoryData } from '../../api/fetchData';
import { globalContext } from './../../context/context';

import styles from './History.module.css';

const History = () => {
    const { countrySelected } = useContext(globalContext);
    const [ historyData, setHistoryData ] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            setHistoryData( await fetchHistoryData(countrySelected) );
        }
        fetchData();
    }, [ countrySelected ]);

    const lineChart = (
        !historyData.dates ? null :
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
        !historyData.dates ? null :  
        <div className={styles.container}>
            <Typography variant="h4" align="center" className={styles.heading}>
                {`Historical Data for ${countrySelected !== 'all' ? countrySelected : 'the Globe'}`}
            </Typography>
            {lineChart}
        </div>
    )
}

export default History;