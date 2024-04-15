function GuessGrid({ value }) {
  return (
    <div>
      <p className="guess">
        {value.split("").map((letter, index) => (
          <span key={index} className="cell">
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export default GuessGrid;
