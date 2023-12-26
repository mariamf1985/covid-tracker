import './App.css'
import VirusCardBackground from './components/Cards/VirusCardBackground'
import covid from '../src/assets/images/icons/covid-defult.svg';
import covidR from '../src/assets/images/icons/covid-red.svg';

function App() {
  
  return (
    <div className=' bg-blue-800 w-full h-80 p-5'>
      <VirusCardBackground title="Total Cases" value="1234567" valueColor="#3639AE" image={covid} />
      <VirusCardBackground title="Total Deaths" value="1234567" valueColor="red" image={covidR} />
    </div>
  )
}

export default App
