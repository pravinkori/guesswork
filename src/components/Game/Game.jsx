import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard";
import Score from "../Score/Score";

// Pick a random word on every pageload
// const answer = sample(WORDS);

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  console.info({ answer });

  const [gameStatus, setGameStatus] = useState("running");
  // State variable to store the list of guesses
  const [guesses, setGuesses] = useState([]);

  const [score, setScore] = useState(0);

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

    const numGuesses = guesses.length;
    if (userInputGuess.toUpperCase() === answer) {
      // Player won
      setScore(calculateScore(numGuesses)); // Calculate score based on guesses
      setGameStatus("won");
    } else if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
      // Player lost
      setScore(0); // Reset score for the next game
      setGameStatus("lost");
    }
  }

  function calculateScore(numGuesses) {
    const baseScore = 100;
    const penaltyPerGuess = 10;
    return Math.max(0, baseScore - penaltyPerGuess * (numGuesses - 1));
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess.value, answer)
  );

  // Render the GuessResults and GuessInput components
  return (
    <>
      {/* {gameStatus === "running" && `${gameStatus} 🟢`}
      {gameStatus === "lost" && `${gameStatus} 🔴`} */}
      <Score score={score} />
      <GuessResults
        // Passes the list of guess values by mapping over the guesses array
        // and extracting the 'value' property from each guess object
        // guesses={guesses.map((guess) => guess.value)}
        // Passes the answer to GuessResults component for comparison
        // answer={answer}

        validatedGuesses={validatedGuesses}
      />

      {/* Passes down the handleSubmitGuess function to GuessInput */}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />

      <Keyboard validatedGuesses={validatedGuesses} />

      {/* Display won banner if gameStatus is won */}
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
          // score={score}
        />
      )}

      {/* Display lost banner if gameStatus is lost */}
      {gameStatus === "lost" && (
        <LostBanner
          answer={answer}
          handleRestart={handleRestart}
          // score={score}
        />
      )}
    </>
  );
}

export default Game;
