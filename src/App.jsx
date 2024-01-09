import './App.css'
import { CounterCard } from './components/Cards/CounterCard'



function App() {
 
  return (
    <>
      <CounterCard bgColor = {"#FFF2F2"}  tittle={"Total Cases"} numColor={'#122672'} dayNum={"1234"} totalValue={"47859"}/>
      <CounterCard bgColor = {'#FFF9F1'}  tittle={"Active Cases"} numColor={'#FF6A07'} totalValue={"47859"}/>
      <CounterCard bgColor = {'#EDFFEC'}  tittle={"Recovered Cases"} numColor={'#B70202'} dayNum={"1234"} totalValue={"47859"}/>
      <CounterCard bgColor = {'#F4FCFF'}  tittle={"Deaths Cases"} numColor={'#2C6DFF'} dayNum={"1234"} totalValue={"47859"}/>
    </>
  )
}

export default App
