import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ countries, setSelectedCountry, fetchNewCurrentData, fetchNewHistoryData }) => {
    const fetchedCountries = countries();
    
    const changeHandler = (event) => {
        const index = event.target.value;
        if (index === 'all') {
            fetchNewCurrentData('all');
            fetchNewHistoryData('all');
            setSelectedCountry({ name: 'the Globe', code: 'all' });
        } else {
            fetchNewCurrentData(fetchedCountries[index].code);
            fetchNewHistoryData(fetchedCountries[index].code);
            setSelectedCountry(fetchedCountries[index]);
        }
    }

    return (
        fetchedCountries.length ?
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='all' onChange={changeHandler}>
                <option value='all'>Global</option>
                {fetchedCountries.map((country, i) => {
                    return <option key={i} value={i}>{country.name}</option>
                })}
            </NativeSelect>
        </FormControl>
        : null
    );
}

export default CountryPicker;