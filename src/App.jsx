import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [score,setScore] = useState(0);
  const [highScore,setHighScore] = useState(0);

  useEffect(()=>{

  })

  return (
    <>
      <h2 className='game-heading'>MOEWMORY</h2>
      <p className='game-rule'>Dont click the same cat twice or else game over!</p>
      <div className="scoreboard-card">
        <p className='score'>Score - {score}</p>
        <p className='score high-score'>High Score - {highScore}</p>
      </div>
    </>
  )
}

export default App
