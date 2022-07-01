import "./App.css";
import Keyboard from "./Keyboard";
import Board from "./Board";
import Guess from "./Guess";
import { useState } from "react";

function App() {
  const [currentGuess, SetCurrentGuess] = useState([]);
  // let keysPressed = [];
  const [isCorrect, setIsCorrect] = useState();

  function onkeyBoardClick(key) {
    console.log(key);
    console.log(currentGuess);

    return SetCurrentGuess([...currentGuess, key]);
  }

  function checkGuess() {
    if (currentGuess.join("") === "hyung") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    console.log(isCorrect);
  }

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Board currentGuess={currentGuess} />
      <Guess guessArray={currentGuess} />
      <button style={{ marginBottom: "5%" }} onClick={checkGuess}>
        {" "}
        Check Guess
      </button>
      <Keyboard onKeyClick={onkeyBoardClick} />
    </div>
  );
}

export default App;
