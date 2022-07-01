export function Keyboard(props) {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
  ];

  const keyboardClick = props.onKeyClick;

  return (
    <div>
      {keys.map((row, index) => (
        // <p>{row}</p>
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "0.5%",
            marginBottom: "0.5%",
          }}
        >
          {row.map((key, index) => (
            <button
              key={index}
              style={{
                backgroundColor: "rgb(243, 223, 245)",
                fontSize: "130%",
                padding: "1%",
                border: "none",
              }}
              onClick={() => keyboardClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Keyboard;
