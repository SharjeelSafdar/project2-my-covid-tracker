export const fetchCountries = async () => {
    try {
        let response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=false');
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
            url = 'https://disease.sh/v3/covid-19/all?yesterday=false&allowNull=false';
        else
            url = `https://disease.sh/v3/covid-19/countries/${countryName}?yesterday=false&strict=true&allowNull=false`;
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

export const fetchHistoryData = async (countryName) => {
    try {
        let url = '';
        let response = null;
        if (countryName === 'all') {
            url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
            response = await (await fetch(url)).json();
        } else {
            url = `https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=all`;
            response = await (await fetch(url)).json();
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
        console.log(error);
    }
}