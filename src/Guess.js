export function Guess(props) {
  const guess = props.guessArray;

  return (
    <div style={{ marginBottom: "2%" }}>
      <p>Current Guess : {guess.join("")}</p>
    </div>
  );
}

export default Guess;
