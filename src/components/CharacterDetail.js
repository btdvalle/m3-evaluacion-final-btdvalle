import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  const { id, name, image, species, gender, status, episodes } = props.character;
  return (
    <React.Fragment>
      <div>
        <Link className="character" to="/">
          Volver
        </Link>
      </div>
      <div
        className="character_detail"
        id={id}
        // className={`character ${favorite ? "favorite" : ""}`}
      >
        <img className="character_detail-img" src={image} alt={name} title={name} />
        <h3 className="name">{name}</h3>
        <p>Gender: {gender} </p>
        <p>Status: {status}</p>
        <p>Origin: {species}</p>
        <p>Episodes: {episodes.length}</p>
      </div>
    </React.Fragment>
  );
};

export default CharacterDetail;
