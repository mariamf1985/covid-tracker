import React from 'react';
import CountryButton from '../../components/buttons/CountryButton';
import UseFetch from '../../services/UseFetch'

const Tracker2 = () => {
    const urlGlobalcases = "https://disease.sh/v3/covid-19/countries/";
    const { data, loading } = UseFetch(urlGlobalcases)
    let countriesFilter = []
    const newData = () => {
        if (data !== null) {
            countriesFilter = data.slice(0, 10)
            return countriesFilter
        }

    }
    console.log(newData());
    return (
        <div className='bg-colorCard3'>
            <h2 className='text-primaryLetterColor font-bold'>Top 10 Country wise Covid-19 Updates - Tiles</h2>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor'>Top Cases</h3>
                    {newData().map(countryInfo => (
                        <CountryButton image={countryInfo.flag} country={countryInfo.country} value={countryInfo.cases} />
                    ))}

                </div>
                {/* <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor'>Today Cases</h3>
                    <CountryButton country = {"España"} value ={"123456"}/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor'>Today Deaths</h3>
                    <CountryButton country = {"España"} value ={"123456"}/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor'>Today Deaths</h3>
                    <CountryButton country = {"España"} value ={"123456"}/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor'>Top Active</h3>
                    <CountryButton country = {"España"} value ={"123456"}/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor'>Top Recover</h3>
                    <CountryButton country = {"España"} value ={"123456"}/>
                </div> */}
            </div>

        </div>

    )
}

export default Tracker2