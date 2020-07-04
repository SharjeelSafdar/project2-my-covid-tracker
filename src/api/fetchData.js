export const fetchCountries = async () => {
    try {
        let response = await fetch('https://corona.lmao.ninja/v2/countries?yesterday=0');
        let result = await response.json();
        return result.map((item) => ({
            name: item.country,
            code: item.countryInfo.iso2,
            flag: item.countryInfo.flag,
        }));
    } catch (error) {
        console.log(error);
    }
}

export const fetchCurrentData = async (countryName) => {
    try {
        let url = '';
        if (countryName === 'all')
            url = 'https://corona.lmao.ninja/v2/all?yesterday=0';
        else
            url = `https://corona.lmao.ninja/v2/countries/${countryName.toLowerCase()}?yesterday=0&strict=true&query`;
        const response = await fetch(url);
        const { 
            updated, //countryInfo,//: { flag },
            cases, todayCases, 
            active, critical, 
            recovered, todayRecovered,
            deaths, todayDeaths,
        } = await response.json();
        return { 
            updated, //countryInfo, // flag,
            cases, todayCases, 
            active, critical, 
            recovered, todayRecovered,
            deaths, todayDeaths, 
        };
    } catch (error) {
        console.log(error);
    }
}