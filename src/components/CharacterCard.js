import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
  const { id, name, image, species } = props.character;
  return (
    <Link className="character" to={`/character/${id}`}>
      <div
        className="character_card"
        // {`character ${favorite ? "favorite" : ""}`}
      >
        <img className="character_card-img" src={image} alt={name} title={name} />
        <div className="character_card-description">
          <h2 className="name">{name}</h2>
          <h3 className="species">{species}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
