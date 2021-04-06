import React from "react";
import { DAYS_COUNT } from "../constants";

export const Day = ({
  item,
  times,
  multipleChoice,
  handleMoveSetTimes,
  handleMouseDown,
  handleMouseUp,
}) => {
  const items = [];
  for (let i = 1; i <= DAYS_COUNT; i++) {
    const chosen = times[item.day]?.includes(i);
    items.push(
      <td
        style={{ minWidth: "41px", maxWidth: "41px" }}
        className={chosen ? "bg-dark" : ""}
        key={i}
        onMouseEnter={() => {
          multipleChoice && handleMoveSetTimes(item, i);
        }}
        onMouseDown={(e) => handleMouseDown(item, i)}
        onMouseUp={handleMouseUp}
      ></td>
    );
  }
  return <>{items}</>;
};
