import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { useState } from "react";

// Pick a random word on every pageload
const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);

    console.log("Received Guess:", guess);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
