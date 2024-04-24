import React from "react";

const TextInput = (props) => {
  return (
    <>
      <input className={props.className} maxLength={1} />
    </>
  );
};

export default TextInput;
