import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import PokeContext, { PokeProvider } from './components/context/PokeContext'

const App = () => {

  const {chances, score} = useContext(PokeContext)
  return (
    <>
    <Navbar/>
    
    <div className="p-8">
      <h1 className={chances === 0 || score ===1000 ? 'text-center font-bold text-xl my-4 md:text-3xl hidden' : 'text-center font-bold text-xl my-4 md:text-3xl'}>Who's That Pokemon ?</h1>
    <ScoreBoard/>
    <Card/>
    <Form/>


    </div>
 </>
  )
}

export default App
