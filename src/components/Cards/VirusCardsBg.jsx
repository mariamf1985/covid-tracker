import React from 'react';
import VirusCardBackground from './VirusCardBackground'
import covid from '../../../src/assets/images/icons/covid-defult.svg';
import covidR from '../../../src/assets/images/icons/covid-red.svg';
import covidG from '../../../src/assets/images/icons/covid-green.svg';
import covidO from '../../../src/assets/images/icons/covid-orange.svg';
import covidRD from '../../../src/assets/images/icons/covid-redark.svg';
import covidB from '../../../src/assets/images/icons/covid-blue.svg';

const VirusCardsBg = ({selectCountrie}) => {
  return (
    <div>
      
        <div className='flex flex-wrap'>
           <VirusCardBackground title="Total Cases" value={selectCountrie.cases} valueColor="#3639AE" image={covid} />
           <VirusCardBackground title="Total Deaths" value={selectCountrie.deaths} valueColor="#FF0000" image={covidR} />
           <VirusCardBackground title="Total Recovered" value={selectCountrie.recovered} valueColor="#82C519" image={covidG} />
           <VirusCardBackground title="Total Active" value={selectCountrie.active} valueColor="#2C6DFF" image={covidB} />
           <VirusCardBackground title="New Cases" value={selectCountrie.todayCases} valueColor="#FF6A07" image={covidO} />
           <VirusCardBackground title="New Deaths" value={selectCountrie.todayDeaths} valueColor="#B70202" image={covidRD} />
        </div>
      
    </div>
  );
};

export default VirusCardsBg;