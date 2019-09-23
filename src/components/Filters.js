import React from "react";
const Filters = props => {
  const handleChange = ev => {
    props.action(ev.currentTarget.value);
  };
  return (
    <form className="form">
      <label>
        ¿Por quién preguntas?
        <input type="text" onChange={handleChange} />
      </label>
    </form>
  );
};

export default Filters;
