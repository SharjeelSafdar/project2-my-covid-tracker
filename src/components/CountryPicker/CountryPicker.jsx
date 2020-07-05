import React, { useContext, useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api/fetchData';
import { globalContext } from './../../context/context';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    const { setCountrySelected } = useContext(globalContext);
    const [ fetchedCountries, setFetchedCountries ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setFetchedCountries( await fetchCountries() );
        }
        fetchData();
    }, []);

    return (
        fetchedCountries.length ?
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue={{name: "all", code: 'all'}} onChange={(e) => setCountrySelected(e.target.value)}>
                <option value='all'>Global</option>
                {fetchedCountries.map((country, i) => {
                    return <option key={i} value={country.code}>{country.name}</option>
                })}
            </NativeSelect>
        </FormControl>
        : null
    );
}

export default CountryPicker;