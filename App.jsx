import React from 'react'
import Header from './Components/Header'
import Map from './Components/Map'
import Map1 from './Components/Map1'
import Map2 from './Components/Map2'
import Movielist from './Components/Movielist'
import Map3 from './Components/Map3'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './Components/List'





const App = () => {
  return (
    <>
    <div className='w-screen h-full overflow-hidden'>
      <Header/>
      <Map2/>
       <Map/>
     
      
     
     
    
      
   
    </div>
    </>
  )
}


export default App