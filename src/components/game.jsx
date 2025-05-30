import { useState } from "react";

function Game({ catList }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);
    

  return (
    <>
      <div className="scoreboard-card">
        <p className="score">Score - {score}</p>
        <p className="score high-score">High Score - {highScore}</p>
      </div>

      <div className="game-grid"></div>
    </>
  );
}

export { Game };
