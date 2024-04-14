import { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [userInputGuess, setUserInputGuess] = useState("");
  console.log({ userInputGuess });

  function handleSubmit(event) {
    event.preventDefault();

    if (userInputGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters 🧐");
      return;
    }

    handleSubmitGuess(userInputGuess);

    setUserInputGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={userInputGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setUserInputGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
