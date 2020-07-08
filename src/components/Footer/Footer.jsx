import React from 'react';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { grey } from '@material-ui/core/colors';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <Typography variant='subtitle1' style={{color: '#cecece'}} >
                App made by
            </Typography>
            <Typography variant='h5' style={{color: 'white'}}>
                Mian M Sharjeel Safdar
            </Typography>
            <div className={styles.social}>
                <a 
                    href="https://github.com/SharjeelSafdar/project2-my-covid-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon style={{ color: grey[50], fontSize: 30 }} className={styles.socialIcon} />
                </a>
                <a 
                    href="https://web.facebook.com/mian.safdar.3386"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon style={{ color: grey[50], fontSize: 30 }} className={styles.socialIcon} />
                </a>
            </div>
        </div>
    )
}

export default Footer;