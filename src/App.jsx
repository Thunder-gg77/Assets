import './App.css'
import Reg from './components/Reg'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import First from './components/First'
import Tab from './components/Tab'
import Counter from './components/Counter'
import New from './components/New'
import Formbasic from './components/Formbasic'
import Apiget from './components/Apiget'
// import GridA from './components/Grid'


function App() {
 

  return (
    <>
    

    <Navbar/>
    <Routes>
      <Route path='/a'element={<First/>}/>
      <Route path='/r'element={<Reg data={{Name:"jiya",age:12,place:"ERK"}}/>}/>
      <Route path='/t'element={<Tab/>}/>
      <Route path='/g'element={<Counter/>}/>
      <Route path='/f'element={<New/>}/>
      <Route path='/i'element={<Formbasic />}/>
      <Route path='/j'element={<Apiget />}/>
      {/* <Route path='/x'element={<GridA />}/> */}
    </Routes> 
    </>

  )
}

export default App
