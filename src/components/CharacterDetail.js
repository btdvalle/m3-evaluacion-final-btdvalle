import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CharacterDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    // this.renderEpisodes = this.renderEpisodes.bind(this);
  }

  // renderEpisodes = episodes => {
  //   return episodes.map(episode => <li>{episode}</li>);
  // };

  render() {
    if (!this.props.character) {
      return (
        <div className="detailpage">
          <h3>Loading...</h3>
          <Link to="/" className="goback">
            {"&larr; Go back"}
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
                  {/* <ul className={`character_detail-description--episodes${this.state.open ? "open" : ""}`}>{this.renderEpisodes(episodes)}</ul> */}
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
