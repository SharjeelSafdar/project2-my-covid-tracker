import React from 'react';
import { Typography } from '@material-ui/core';
import corona from '../../images/coronaError.png';
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <img src={corona} alt="" className={styles.coronaImage} />
            <Typography variant="h5">Oops! Something went wrong ...</Typography>
        </div>
    )
};

export default Error;