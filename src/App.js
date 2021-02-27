import { useEffect, useState } from 'react'
import './App.css'
import Modron from './components/Modron'

function App() {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    setCharacter({
      ability: {
        agility: 0,
        presence: 0,
        strength: 1,
        toughness: 0
      },
      actions: ['Hamfund the Squire', 'Poltroon the Court Jester'],
      class: 'Wretched Royalty',
      equipment: {
        armor: 'Fur armor',
        shield: true,
        weapon: 'Femur'
      },
      habits: 'Prone to substance abuse and lazy.',
      health: 3,
      money: 168,
      name: 'Dummy',
      inventory: [
        {
          health: 0,
          name: 'Waterskin',
          quantity: 3
        }
      ],
      omens: {
        notation: '1d2',
        total: 2
      },
      scrolls: ['Whispers Pass the Gate'],
      tales: 'Your earliest memories are of following an army in eastern Wästland.',
      traits: 'You have thirty or so friends who never let you down: YOUR TEETH.'
    })
  }, [])

  return (
    <div id='app'>
      <Modron character={character} />
    </div>
  )
}

export default App
