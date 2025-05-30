import { useState } from "react";
import { shuffleArray } from "../helperFunctions.jsx";



function Game({ catList }) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCardIds, setClickedCardIds] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);

    const copyOfCatList = structuredClone(catList);
    shuffleArray(copyOfCatList);


    function newGame() {
        setScore(0);
        setClickedCardIds([]);
    }

    return (
        <>
            <div className="scoreboard-card">
                <p className="score">Score - {score}</p>
                <p className="score high-score">High Score - {highScore}</p>
            </div>

            <div className="game-grid">

                {copyOfCatList.map((cat) => {
                    return <>
                        <div className="cat-card" onClick={() => {
                            const clickSound = new Audio('/public/sound/clicksound.wav');
                            clickSound.play();

                            // checking if same card is clicked twice 
                            if (clickedCardIds.includes(cat.id)) {
                                newGame();
                                return;
                            }

                            setScore(score + 1);  //increment score by 1

                            // setting new state with updated clicked cat card ids
                            const copyOfClickedCardIds = structuredClone(clickedCardIds);
                            copyOfClickedCardIds.push(cat.id);
                            setClickedCardIds(copyOfClickedCardIds);


                            if (score >= highScore) {   //increment highscore by 1 if its new high score
                                setHighScore(highScore + 1);
                            }

                        }}>
                            <img src={cat.url} alt="cat" className="cat-image" />
                        </div>
                    </>
                })}
            </div>
        </>
    );
}

export { Game };
