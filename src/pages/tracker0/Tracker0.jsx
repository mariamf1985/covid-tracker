import React from 'react'
import UseFetch from '../../services/UseFetch'
import CounterCard from '../../components/Cards/CounterCard'
import CountryCard from '../../components/Cards/CountryCard'
import TopCountries from '../../molecules/TopCountries'


const Tracker0 = () => {
    const urlGlobalCases = "https://disease.sh/v3/covid-19/all";
    const {data, loading} = UseFetch(urlGlobalCases)
    
  return (
    <>
    <h1 className="text-xl text-black font-bold my-4 mx-4">COVID-19 Tracker</h1>
    <div>
        
        {!loading ? <CounterCard bgColor = {"#FFF2F2"}  tittle={"Total Cases"} numColor={'#122672'} dayNum={"+ " + data.todayCases} totalValue={data.cases}/> : <p>Cargando</p>}
        {!loading ? <CounterCard bgColor = {'#FFF9F1'}  tittle={"Active Cases"} numColor={'#FF6A07'} totalValue={data.active}/> : <p>Cargando</p>}
        {!loading ? <CounterCard bgColor = {'#EDFFEC'}  tittle={"Recovered Cases"} numColor={'#B70202'} dayNum={"+ " + data.todayRecovered} totalValue={data.recovered}/> : <p>Cargando</p>}
        {!loading ? <CounterCard bgColor = {'#F4FCFF'}  tittle={"Deaths Cases"} numColor={'#2C6DFF'} dayNum={"+ " + data.todayDeaths} totalValue={data.deaths}/> : <p>Cargando</p>}

    </div>
    <h2 className="text-xl font-semibold mb-2 text-primaryLetterColor my-4 mx-4">Top 10 Country</h2>
      <div>
      <CountryCard></CountryCard>
    </div> 
    

    </>
  )
}

export default Tracker0