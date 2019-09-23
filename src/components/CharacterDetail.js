import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  const { id, name, image, species, gender, status, episodes, origin } = props.character;
  return (
    <div className="detailpage">
      <div>
        <Link className="goback" to="/">
          Volver
        </Link>
      </div>
      <div
        className="character_detail"
        id={id}
        // className={`character ${favorite ? "favorite" : ""}`}
      >
        <img className="character_detail-img" src={image} alt={name} title={name} />
        <div className="character_detail-description">
          <h3 className="name">{name}</h3>
          <ul>
            <li className="character_detail-description-li">
              <strong>Gender:</strong> {gender}{" "}
            </li>
            <li className="character_detail-description-li">
              <strong>Status:</strong> {status}
            </li>
            <li className="character_detail-description-li">
              <strong>Species:</strong> {species}
            </li>
            <li className="character_detail-description-li">
              <strong>Origin:</strong> {origin}
            </li>
            <li className="character_detail-description-li">
              <strong>Episodes:</strong> {episodes.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
