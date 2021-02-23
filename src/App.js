import { useState } from 'react'
import './App.css'
import Modron from './components/Modron'

function App() {
  const [character, setCharacter] = useState({ name: 'Dummy' })

  return (
    <div id='app'>
      <Modron character={character} />
    </div>
  )
}

export default App
