export function Board(props) {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
        }}
      >
        {props.currentGuess.map((letter, index) => (
          <div key={index} style={{ marginLeft: "40%" }}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
