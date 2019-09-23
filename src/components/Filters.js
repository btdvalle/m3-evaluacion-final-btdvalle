import React from "react";
const Filters = props => {
  const handleChange = ev => {
    props.action(ev.currentTarget.value);
  };
  return (
    <div>
      <label>
        ¿Por quién preguntas?
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filters;
