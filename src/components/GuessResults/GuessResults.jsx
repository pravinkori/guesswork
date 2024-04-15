import GuessGrid from "../GuessGrid";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <GuessGrid key={guess.id} value={guess.value} />
      ))}
    </div>
  );
}

export default GuessResults;
