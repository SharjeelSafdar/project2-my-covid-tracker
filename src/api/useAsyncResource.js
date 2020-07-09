import { useState, useCallback } from 'react';

const initializeDataReader = (apiFunction, ...parameters) => {
    // keep data in a local variable so we can synchronously request it later
    let data;
    // keep track of progress and errors
    let status = 'pending';
    let error;
  
    // call the api function immediately, starting fetching
    const fetchingData = apiFunction(...parameters)
		.then((response) => {
			data = response;
			status = 'done';
		})
		.catch((e) => {
			error = e;
			status = 'error';
		});
  
    // this is the data reader function that will return the data,
    // or throw if it's not ready or has errored
    return () => {
		if (status === 'pending') {
			throw fetchingData;
		} else if (status === 'error') {
			throw error;
		}
  
		return data;
    }
};

export const useAsyncResource = (apiFunction, ...parameters) => {
    const [dataReader, updateDataReader] = useState(() => {
        // lazy initialization, when no parameters are passed
        if (!parameters.length) {
			// we return an empty data reader function
			return () => undefined;
        }
    
        // eager initialization for api functions that don't accept arguments
        if (
          // check that the api function doesn't take any arguments
          !apiFunction.length
          // but the user passed an empty array as the only parameter
          && parameters.length === 1
          && Array.isArray(parameters[0])
          && parameters[0].length === 0
        ) {
          return initializeDataReader(apiFunction);
        }
    
        // eager initialization for all other cases
        return initializeDataReader(apiFunction, ...parameters);
    });

    // Updater function to re-fetch data on demand.
    const updater = useCallback((...newParameters) => {
        updateDataReader(() => initializeDataReader(apiFunction, ...newParameters));
    }, [apiFunction]);
    
    return [dataReader, updater];
}
