import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import corona from '../../images/coronaError.png';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className={styles.container}>
                <img src={corona} alt="" className={styles.coronaImage} />
                <Typography variant="h5">Oops! Something went wrong ...</Typography>
            </div>
        );
      }
  
      return this.props.children; 
    }
  }

// const ErrorBoundry = () => {
//     return (
        
//     )
// }

export default ErrorBoundary;