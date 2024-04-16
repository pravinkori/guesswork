import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

// Cell component represents a single cell in the GuessGrid
function Cell({ letter, status }) {
  // Determine the CSS class for the cell based on its status
  const className = status ? `cell ${status}` : "cell";

  // Render the cell with the appropriate CSS class and letter
  return <span className={className}>{letter}</span>;
}

// GuessGrid component receives a value (a guess) and displays it
function GuessGrid({ value, answer }) {
  // Check the correctness of the guess against the answer
  const result = checkGuess(value, answer);

  return (
    <div>
      <p className="guess">
        {/* Mapping over a range of numbers up to 5 */}
        {range(5).map((num) => (
          // Render a Cell component for each number
          <Cell
            key={num}
            // Pass the letter and status of the guess to the Cell component
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
    </div>
  );
}

export default GuessGrid;
