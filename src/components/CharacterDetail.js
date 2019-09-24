import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CharacterDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.renderIcons = this.renderIcons.bind(this);
  }

  renderIcons(character) {
    let status;
    let species;

    if (character.status.toLowerCase() === "alive") {
      status = "♡";
    } else if (character.status.toLowerCase() === "dead") {
      status = "💀";
    } else {
      status = "❔";
    }
    character.species.toLowerCase() === "human" ? (species = "👋🏼") : (species = "🖖🏼");
    return (
      <h2 className="character_detail-icons--h2">
        {status} {species}
      </h2>
    );
  }

  loader() {
    return (
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  render() {
    if (!this.props.character) {
      return (
        <div className="detailpage">
          <h3>Loading...</h3>
          {this.loader()}
          <Link to="/" className="goback">
            {"< Go back"}
          </Link>
        </div>
      );
    } else {
      const { id, name, image, species, gender, status, episodes, origin } = this.props.character;
      return (
        <div className="detailpage">
          <Link className="goback" to="/">
            {"< Go back"}
          </Link>
          <div className="character_detail" id={id}>
            <div className="character_detail-icons">{this.renderIcons(this.props.character)}</div>
            <img className="character_detail-img" src={image} alt={name} title={name} />
            <div className="character_detail-description">
              <h3 className="name">{name}</h3>
              <ul>
                <li className="character_detail-description-li">
                  <strong>Gender:</strong> {gender}{" "}
                </li>
                <li className="character_detail-description-li">
                  <strong>Status: </strong> {status}
                </li>
                <li className="character_detail-description-li">
                  <strong>Species: </strong> {species}
                </li>
                <li className="character_detail-description-li">
                  <strong>Origin: </strong> {origin}
                </li>
                <li className="character_detail-description-li">
                  <strong>Episodes: </strong> {episodes.length}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

CharacterDetail.propTypes = {
  characters: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string,
    episodes: PropTypes.array,
    origin: PropTypes.string
  })
};

export default CharacterDetail;
