import { useState } from 'react'
import MainOutput from './components/MainOutput'
import MainInput from './components/MainInput'
import Header from './components/Header'
import './App.css'

function App() {
 

  return (
   <div>
      <Header />

      <MainInput />
   
      <MainOutput />
  
   </div>
  )
}

export default App
