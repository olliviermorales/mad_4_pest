import React from "react";

const Cockroach = ({
  id,
  isSquashed,
  position,
  handleClick,
  rotation,
}: any) => {
  return (
    <div
      className={`cockroach ${isSquashed ? "squashed" : ""}`}
      onClick={(event) => handleClick(id, event)}
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
        position: "absolute",
        transform: `rotate(${rotation}deg)`,
      }}
    ></div>
  );
};

export default Cockroach;
