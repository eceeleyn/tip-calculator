import React from "react";

export const Butons = ({ tips, className, id, type = "button", onClick }) => {
  return (
    <>
      <button className={className} id={id} type={type} onClick={onClick}>
        <span>{tips}</span>
      </button>
      ;
    </>
  );
};
