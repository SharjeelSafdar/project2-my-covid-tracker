import earth from '../images/earth.png';


export const fetchCountries = async () => {
    try {
        const global = { name: 'All Countries', code: 'all' };
        let response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=false');
        let result = await response.json();
        result = result.map((item) => ({
            name: item.country,
            code: item.countryInfo.iso2,
        }))
        result.unshift(global);
        return result;
        
    } catch (error) {
        // console.log(error);
    }
}

export const fetchCurrentData = async (countryCode) => {
    try {
        let url = '';
        if (countryCode === 'all')
            url = 'https://disease.sh/v3/covid-19/all?yesterday=false&allowNull=false';
        else
            url = `https://disease.sh/v3/covid-19/countries/${countryCode}?yesterday=false&strict=true&allowNull=false`;
        const response = await (await fetch(url)).json();
        const { 
            country, updated,
            cases, todayCases, 
            active, critical, 
            recovered, todayRecovered,
            deaths, todayDeaths,
        } = response;
        return { 
            country, updated,
            cases, todayCases, 
            active, critical, 
            recovered, todayRecovered,
            deaths, todayDeaths,
        };
    } catch (error) {
        // console.log(error);
    }
}

export const fetchHistoryData = async (countryCode) => {
    try {
        let url = `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=all`;
        let response = await (await fetch(url)).json();
        if (response.message) {
            return { message: response.message }
        }
        if (countryCode !== 'all') {
            response = response.timeline;
        }
        const dates = Object.keys(response.cases);
        const confirmed = Object.values(response.cases);
        const recovered = Object.values(response.recovered);
        const deaths = Object.values(response.deaths);
        const active = [];
        for ( let iii = 0; iii < confirmed.length; iii += 1) {
            active[iii] = confirmed[iii] - recovered[iii] - deaths[iii];
        }
        return { dates, confirmed, recovered, deaths, active };

    } catch (error) {
        // console.log(error);
    }
}

export const fetchFlag = async (countryCode) => {
    try {
        return (countryCode === 'all')
            ? earth
            : `https://disease.sh/assets/img/flags/${countryCode.toLowerCase()}.png`
    } catch (error) {
        // console.log(error);
    }
}