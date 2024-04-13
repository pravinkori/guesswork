import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload
const answer = sample(WORDS);

console.info({ answer });

function Game() {
  return (
    <div>
      <p>Put a game here</p>
    </div>
  );
}

export default Game;
