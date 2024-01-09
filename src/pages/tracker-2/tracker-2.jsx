import React from 'react';
import CountryButton from '../../components/buttons/CountryButton';

const Tracker2 = () => {
    return (
        <div className='bg-colorCard3'>
            <h2 className='text-primaryLetterColor font-bold'>Top 10 Country wise Covid-19 Updates - Tiles</h2>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h3 className='text-primaryLetterColor'>Top Cases</h3>
                    <CountryButton country={"España"} value={"123456"} />
                </div>
                <div className='flex flex-col'>
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
                </div>
            </div> 

            </div>
            
            )
}

            export default Tracker2