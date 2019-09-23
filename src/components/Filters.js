import React from "react";
const Filters = props => {
  const handleChange = ev => {
    props.action(ev.currentTarget.value);
  };
  return (
    <form className="form">
      <label className="form_label">¿Por quién preguntas?</label>
      <input className="form_input" type="text" placeholder="Ej: Antenna Morty" onChange={handleChange} />
    </form>
  );
};

export default Filters;
