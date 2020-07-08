import React, { useCallback } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ countries, setSelectedCountry, fetchNewCurrentData, fetchNewHistoryData, getNewFlag }) => {
    const fetchedCountries = countries();

    const changeHandler = useCallback(
        (event) => {
            const index = event.target.value;
            setSelectedCountry(fetchedCountries[index]);
            fetchNewCurrentData(fetchedCountries[index].code);
            fetchNewHistoryData(fetchedCountries[index].code);
            getNewFlag(fetchedCountries[index].code);
        },
        [ fetchedCountries, setSelectedCountry, fetchNewCurrentData, fetchNewHistoryData, getNewFlag ],
    );

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue={0} onChange={changeHandler}>
                {fetchedCountries.map((country, i) => {
                    return <option key={i} value={i}>{country.name}</option>
                })}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;