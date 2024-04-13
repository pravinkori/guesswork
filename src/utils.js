// The function takes an array 'arr' as input parameter
export const sample = (arr) => {
  // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
  // Multiplying it by arr.length gives a random float between 0 (inclusive) and the length of the array (exclusive)
  // Math.floor() rounds down to the nearest integer, ensuring it's within the valid index range of the array
  // This expression selects a random index from the array 'arr'
  const randomIndex = Math.floor(Math.random() * arr.length);

  // Return the element from 'arr' at the randomly selected index
  return arr[randomIndex];
};

// This function creates an array containing a sequence of numbers.
export const range = (start, end, step = 1) => {
  // Create an empty array to store the sequence.
  let output = [];

  // Handle optional arguments:
  // If 'end' is not provided, swap it with 'start' and set 'start' to 0.
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  // Loop through the sequence and add values to the 'output' array.
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  // Return the final array containing the sequence.
  return output;
};
