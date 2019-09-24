import React from "react";
const Filters = props => {
  const handleChange = ev => {
    props.actionInput(ev.currentTarget.value);
  };
  const handleCheckbox = ev => {
    props.actionCheckbox(ev.currentTarget.value);
  };
  return (
    <form className="form">
      <div className="form_search">
        <label className="form_search-label">¿Por quién preguntas?</label>
        <input className="form_search-input" type="text" placeholder="Ej: Antenna Morty" onChange={handleChange} />
      </div>
      <div className="form_checkbox">
        <span className="form_checkbox-label">Filter by specie: </span>
        <label className="form_checkbox-label">
          Human
          <input type="radio" name="specie" value="human" onChange={handleCheckbox} />
        </label>
        <label className="form_checkbox-label">
          Alien
          <input type="radio" name="specie" value="alien" onChange={handleCheckbox} />
        </label>
      </div>
    </form>
  );
};

export default Filters;
