import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { useState } from "react";

// Pick a random word on every pageload
const answer = sample(WORDS);

console.info({ answer });

function Game() {
  // State variable to store the list of guesses
  const [guesses, setGuesses] = useState([]);

  // Function to handle the submission of a guess
  function handleSubmitGuess(userInputGuess) {
    // Constructing the next guess object with the user's input and a unique ID
    const nextGuess = {
      value: userInputGuess,
      id: `${userInputGuess}-${Math.random()}`,
    };
    // Updating the guesses state with the new array without mutating original array held in state
    setGuesses([...guesses, nextGuess]);

    console.log("Received Guess:", userInputGuess);
  }

  // Render the GuessResults and GuessInput components
  return (
    <>
      {/* Passes down the list of guess values to GuessResults */}
      <GuessResults guesses={guesses.map((guess) => guess.value)} />

      {/* Passes down the handleSubmitGuess function to GuessInput */}
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
