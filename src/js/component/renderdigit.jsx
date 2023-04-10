
import React from "react";

const digitFont = [
  "11111001100110011001100110011111",
  "11100010001000100010001000101111",
  "11110001000100011111100010001111",
  "11110001000100010111000100011111",
  "10011001100110011111000100010001",
  "111110001000100011110001000111111",
  "11111000100010001111100110011111",
  "11110001000100010011000100010001",
  "11111001100110011111100110011111",
  "11111001100110011111000100011111",
];

const RenderDigit = ({ cellSize, gap, digit }) => {
  const bits = digitFont[digit];
  const cells = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
      const bitIndex = i * 4 + j;
      const isFilled = bits[bitIndex] === "1";
      const backgroundColor = isFilled ? "#181818" : "#EFFD5F";
      const cellStyle = {
        width: `${cellSize}px`,
        height: `${cellSize}px`,
        margin: `${gap}px ${gap}px 0 0`,
        borderRadius: "50%",
        backgroundColor: backgroundColor,
      };
      cells.push(<div key={bitIndex} style={cellStyle}></div>);
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(4, ${cellSize}px)`,
        gridTemplateRows: `repeat(8, ${cellSize}px)`,
        gap: `${gap}px`,
      }}>
      {cells}
    </div>
  );
};

export default RenderDigit;
