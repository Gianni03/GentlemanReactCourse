import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Gianni')
  
  const countMore = () => {
    setCount((count) => count + 1)
  }

  let localCount = 0;
  const increaseLocalCount = () => {
    localCount += 1
    console.log(`Local count is ${localCount}`)
  }
  // si uso el local count, no se actualiza el valor en el componente porque no estoy usando el useState, funciona pero no lo estoy guardando en el estado

  const changeName = () => {
    setName('tuki')
  }

  return (
    <>
    <Button label={`Count is ${count}`} parentMethod={countMore} /> 
    <p>{ name }</p>    
    <Button label="Change Name" parentMethod={changeName} /> 
    </>
  )
}

export default App
