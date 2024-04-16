import GuessGrid from "../GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

// GuessResults component receives an array of guesses and displays them
function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {/* Mapping over a range of numbers up to NUM_OF_GUESSES_ALLOWED */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        // Rendering GuessGrid component for each number with the corresponding guess value and answer
        <GuessGrid
          key={num}
          // Pass the guess value at the current index
          value={guesses[num]}
          // Pass the answer to compare with the guess
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessResults;
