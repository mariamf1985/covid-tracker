import React from 'react';
import VirusCardBackground from './VirusCardBackground'
import covid from '../../../src/assets/images/icons/covid-defult.svg';
import covidR from '../../../src/assets/images/icons/covid-red.svg';
import covidG from '../../../src/assets/images/icons/covid-green.svg';
import covidO from '../../../src/assets/images/icons/covid-orange.svg';
import covidRD from '../../../src/assets/images/icons/covid-redark.svg';
import covidB from '../../../src/assets/images/icons/covid-blue.svg';

const VirusCardsBg = () => {
  return (
    <div>
      
        <div className='flex flex-wrap'>
           <VirusCardBackground title="Total Cases" value="1234567" valueColor="#3639AE" image={covid} />
           <VirusCardBackground title="Total Deaths" value="1234567" valueColor="#FF0000" image={covidR} />
           <VirusCardBackground title="Total Recovered" value="1234567" valueColor="#82C519" image={covidG} />
           <VirusCardBackground title="Total Active" value="1234567" valueColor="#2C6DFF" image={covidB} />
           <VirusCardBackground title="New Cases" value="1234567" valueColor="#FF6A07" image={covidO} />
           <VirusCardBackground title="New Deaths" value="1234567" valueColor="#B70202" image={covidRD} />
        </div>
      
    </div>
  );
};

export default VirusCardsBg;