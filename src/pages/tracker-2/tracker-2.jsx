import React, { useEffect, useState } from 'react';
import CountryButton from '../../components/buttons/CountryButton';
import UseFetch from '../../services/UseFetch';

const Tracker2 = () => {
    const urlGlobalcases = "https://disease.sh/v3/covid-19/countries/";
    const { data, loading } = UseFetch(urlGlobalcases);

    const [countriesByCases, setCountriesByCases] = useState([]);
    const [countriesByTodayCases, setCountriesByTodayCases] = useState([]);
    const [countriesByDeaths, setCountriesByDeaths] = useState([]);
    const [countriesByTodayDeaths, setCountriesByTodayDeaths] = useState([]);
    const [countriesByActive, setCountriesByActive] = useState([]);
    const [countriesByRecovered, setCountriesByRecovered] = useState([]);

    useEffect(() => {
        if (data) {
            const sortedByCases = data.slice().sort((a, b) => b.cases - a.cases).slice(0, 10);
            const sortedByTodayCases = data.slice().sort((a, b) => b.todayCases - a.todayCases).slice(0, 10);
            const sortedByDeaths = data.slice().sort((a, b) => b.deaths - a.deaths).slice(0, 10);
            const sortedByTodayDeaths = data.slice().sort((a, b) => b.todayDeaths - a.todayDeaths).slice(0, 10);
            const sortedByActive = data.slice().sort((a, b) => b.active - a.active).slice(0, 10);
            const sortedByRecovered = data.slice().sort((a, b) => b.recovered - a.recovered).slice(0, 10);

            setCountriesByCases(sortedByCases);
            setCountriesByTodayCases(sortedByTodayCases);
            setCountriesByDeaths(sortedByDeaths);
            setCountriesByTodayDeaths(sortedByTodayDeaths);
            setCountriesByActive(sortedByActive);
            setCountriesByRecovered(sortedByRecovered);
        }
    }, [data]);

    return (
        <div className='float-right bg-colorCard3 p-2'>
            <h2 className='text-primaryLetterColor text-xl font-bold border-b-2 p-2 
            '>Top 10 Country wise Covid-19 Updates - Tiles</h2>
            <div className='flex flex-row pt-4'>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor text-sm font-bold'>Top Cases</h3>
                    {countriesByCases.map(countryInfo => (
                        <CountryButton key={countryInfo.country} image={countryInfo.countryInfo.flag} country={countryInfo.country} value={countryInfo.cases} />
                    ))}
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor text-sm font-bold'>Today Cases</h3>
                    {countriesByTodayCases.map(countryInfo => (
                        <CountryButton key={countryInfo.country} image={countryInfo.countryInfo.flag} country={countryInfo.country} value={countryInfo.todayCases} />
                    ))}
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor text-sm font-bold'>Top Deaths</h3>
                    {countriesByDeaths.map(countryInfo => (
                        <CountryButton key={countryInfo.country} image={countryInfo.countryInfo.flag} country={countryInfo.country} value={countryInfo.deaths} />
                    ))}
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor text-sm font-bold'>Today Deaths</h3>
                    {countriesByTodayDeaths.map(countryInfo => (
                        <CountryButton key={countryInfo.country} image={countryInfo.countryInfo.flag} country={countryInfo.country} value={countryInfo.todayDeaths} />
                    ))}
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor text-sm font-bold'>Top Active</h3>
                    {countriesByActive.map(countryInfo => (
                        <CountryButton key={countryInfo.country} image={countryInfo.countryInfo.flag} country={countryInfo.country} value={countryInfo.active} />
                    ))}
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor text-sm font-bold'>Top Recover</h3>
                    {countriesByRecovered.map(countryInfo => (
                        <CountryButton key={countryInfo.country} image={countryInfo.countryInfo.flag} country={countryInfo.country} value={countryInfo.recovered} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tracker2;