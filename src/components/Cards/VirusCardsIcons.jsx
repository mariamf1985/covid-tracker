import React from 'react';
import VirusCardIcon from './VirusCardIcon';
import covid from '../../../src/assets/images/icons/covid-defult.svg';
import covidR from '../../../src/assets/images/icons/covid-red.svg';
import covidG from '../../../src/assets/images/icons/covid-green.svg';
import covidRD from '../../../src/assets/images/icons/covid-redark.svg';
import helpPhone from '../../../src/assets/images/icons/telephone.svg';

const VirusCardsIcons = ({allCases}) => {
  return (
    <div className='flex flex-wrap gap-[2px]'>
        <VirusCardIcon title={"Total Confirmed"} value={allCases.cases} image={covid}/>
        <VirusCardIcon title={"Total Recovered"} value={allCases.recovered} image={covidG}/>
        <VirusCardIcon title={"Total Deaths"} value={allCases.deaths} image={covidR}/>
        <VirusCardIcon title={"New Deaths"} value={allCases.todayDeaths} image={covidRD}/>
        <VirusCardIcon title={"Help Lines No."} value={"198"} image={helpPhone}/>
    </div>
  )
}

export default VirusCardsIcons