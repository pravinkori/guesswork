import { range } from "../../utils";

// GuessGrid component receives a value (a guess) and displays it
function GuessGrid({ value }) {
  return (
    // Container div for the GuessGrid component
    <div>
      <p className="guess">
        {/* Mapping over a range of numbers up to 5 */}
        {range(5).map((num) => (
          // Rendering a span for each number with the corresponding letter from the guess value
          <span key={num} className="cell">
            {/* Displaying the letter at index 'num' of the guess value */}
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default GuessGrid;
