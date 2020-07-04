import React, { createContext, useState } from 'react';
// import reducerFunc from './reducerFunc';

const initialState = {};
export const globalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [ countrySelected, setCountrySelected ] = useState('all');
    const [ data, setData ] = useState({});

    return (
        <globalContext.Provider value={{
            countrySelected,
            setCountrySelected,
            data,
            setData
        }}>
            {children}
        </globalContext.Provider>
    );
}