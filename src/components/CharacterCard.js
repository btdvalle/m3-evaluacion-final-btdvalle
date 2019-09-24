import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = props => {
  const { id, name, image, species } = props.character;
  return (
    <Link className="character" to={`/character/${id}`}>
      <div className="character_card">
        <img className="character_card-img" src={image} alt={name} title={name} />
        <div className="character_card-description">
          <h2 className="name">{name}</h2>
          <h3 className="species">
            {species} {species.toLowerCase() === "human" ? "👋🏼" : "🖖🏼"}
          </h3>
        </div>
      </div>
    </Link>
  );
};

CharacterCard.propTypes = {
  characters: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string
  })
};

export default CharacterCard;
