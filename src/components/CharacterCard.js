import React from "react";
const CharacterCard = props => {
  const { id, name, image, species } = props.character;
  return (
    <div
      id={id}
      // className={`character ${favorite ? "favorite" : ""}`}
    >
      <img className="img" src={image} alt={name} title={name} />
      <h2 className="name">{name}</h2>
      <h3>{species}</h3>
    </div>
  );
};

export default CharacterCard;
