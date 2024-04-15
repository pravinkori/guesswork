import GuessGrid from "../GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

// GuessResults component receives an array of guesses and displays them
function GuessResults({ guesses }) {
  return (
    // Container div for the guess results
    <div className="guess-results">
      {/* Mapping over a range of numbers up to NUM_OF_GUESSES_ALLOWED */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        // Rendering GuessGrid component for each number with the corresponding guess value
        <GuessGrid key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
