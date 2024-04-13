import { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  console.log({ guess });
  console.log(guess);

  function handleSubmit(event) {
    event.preventDefault();

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
