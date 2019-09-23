import React from "react";
const CharacterCard = props => {
  const { id, name, image, species } = props.character;
  const handleClick = e => {
    // props.action(e);
  };
  return (
    <div
      id={id}
      // className={`character ${favorite ? "favorite" : ""}`} onClick={handleClick}
    >
      <img className="img" src={image} alt={name} title={name} />
      <h2 className="name">{name}</h2>
      <h3>{species}</h3>
    </div>
  );
};

export default CharacterCard;
