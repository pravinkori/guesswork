export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  // If the guess is empty or null, return null.
  if (!guess) {
    return null;
  }

  // Convert the guess to uppercase and split it into an array of characters.
  const guessChars = guess.toUpperCase().split("");
  // Split the answer into an array of characters.
  const answerChars = answer.split("");

  // Initialize the result array to store the correctness status of each letter.
  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    // If the guessed character matches the corresponding character in the answer.
    if (guessChars[i] === answerChars[i]) {
      // Mark the letter as correct in the result array.
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };
      // Mark the corresponding character in the answer as solved.
      answerChars[i] = SOLVED_CHAR;
      // Mark the guessed character as solved.
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: Look for misplaced or incorrect letters.
  for (let i = 0; i < guessChars.length; i++) {
    // If the character has already been marked as solved.
    if (guessChars[i] === SOLVED_CHAR) {
      continue; // Skip to the next iteration.
    }

    // Initialize the status as incorrect.
    let status = "incorrect";
    // Find the index of the guessed character in the answer.
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    // If the guessed character exists in the answer but is misplaced.
    if (misplacedIndex >= 0) {
      // Mark the status as misplaced.
      status = "misplaced";
      // Mark the corresponding character in the answer as solved.
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    // Store the result for the current letter in the result array.
    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  // Return the result array.
  return result;
}
