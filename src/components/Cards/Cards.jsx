import React from 'react';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ currentData, countryName, flag }) => {
    const data = currentData();
    const countryFlag = flag();

    return (
        !data.cases ? null :
        <div className={styles.container}>
            <Typography variant="h4" align="center" className={styles.heading}>
                {`Current Data for ${countryName}`}
                <img src={countryFlag} alt="Country Flag" className={styles.flag}/>
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center" className={styles.heading2}>
                {`Last Updated: ${new Date(data.updated).toDateString()}`}
            </Typography>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={10} md={2} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.cases} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="secondary">{`+${data.todayCases} New`}</Typography>
                        <Typography variant="body2">Number of confirmed COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={2} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.active} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="secondary">{`${data.critical} Critical`}</Typography>
                        <Typography variant="body2">Number of active COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.recovered} duration={2.5} separator="," />
                        </Typography>
                        <Typography className={styles.newRecoveries}>{`+${data.todayRecovered} New`}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={data.deaths} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="secondary">{`+${data.todayDeaths} New`}</Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;