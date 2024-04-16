import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload
const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  // State variable to store the list of guesses
  const [guesses, setGuesses] = useState([]);

  // Function to handle the submission of a guess
  function handleSubmitGuess(userInputGuess) {
    // Constructing the next guess object with the user's input and a unique ID
    const nextGuess = {
      value: userInputGuess,
      id: `${userInputGuess}-${Math.random()}`,
    };

    // Updated list of guesses after adding the new guess
    const updatedGuesses = [...guesses, nextGuess];
    // Updating the guesses state with the new array without mutating original array held in state
    setGuesses(updatedGuesses);

    if (userInputGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }

    console.log("Received Guess:", userInputGuess);
  }

  // Render the GuessResults and GuessInput components
  return (
    <>
      {gameStatus}
      <GuessResults
        // Passes the list of guess values by mapping over the guesses array
        // and extracting the 'value' property from each guess object
        guesses={guesses.map((guess) => guess.value)}
        // Passes the answer to GuessResults component for comparison
        answer={answer}
      />

      {/* Passes down the handleSubmitGuess function to GuessInput */}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />

      {gameStatus !== "running" && (
        <GameOverBanner
          gameStatus={gameStatus}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
