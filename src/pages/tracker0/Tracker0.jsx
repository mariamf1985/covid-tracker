import React from 'react'
import useFetch from '../../services/UseFetch'
import CounterCard from '../../components/Cards/CounterCard'
import CountryCard from '../../components/Cards/CountryCard'
import TopCountries from '../../molecules/TopCountries'


const Tracker0 = () => {
    const urlGlobalCases = "https://disease.sh/v3/covid-19/all";
    const {data, loading} = useFetch(urlGlobalCases)
    
  return (
    <div className='bg-withe w-[25.77%] ml-[80px] min-h-screen flex flex-col font-sans xl:w-[25.76%] max-[1270px]:hidden'>
    <h1 className="text-4xl text-black font-bold ml-6 mt-4">COVID-19 Tracker</h1>
    <div className='flex flex-col items-center gap-3 mt-4'>
        
        {!loading ? <CounterCard borderHoverColor = {'#FF0008'} bgColor = {"#FFF2F2"}  title={"Total Cases"} numColor={'#FF0008'} dayNum={"+ " + data.todayCases} totalValue={data.cases}/> : <p>Cargando</p >}
        {!loading ? <CounterCard borderHoverColor = {'#FF6A07'} bgColor = {'#FFF9F1'}  title={"Active Cases"} numColor={'#FF6A07'} totalValue={data.active}/> : <p>Cargando</p>}
        {!loading ? <CounterCard borderHoverColor = {'#82C519'} bgColor = {'#EDFFEC'}  title={"Recovered Cases"} numColor={'#82C519'} dayNum={"+ " + data.todayRecovered} totalValue={data.recovered}/> : <p>Cargando</p>}
        {!loading ? <CounterCard borderHoverColor = {'#2C6DFF'} bgColor = {'#F4FCFF'}  title={"Deaths Cases"} numColor={'#2C6DFF'} dayNum={"+ " + data.todayDeaths} totalValue={data.deaths}/> : <p>Cargando</p>}

    </div>
    <h2 className="text-xl font-semibold mb-2 text-primaryLetterColor ml-6 mt-4">Top 10 Country</h2>
      <div className='flex flex-col items-center gap-3 mt-4'>
      <TopCountries></TopCountries>
    </div> 
    

    </div>
  )
}

export default Tracker0