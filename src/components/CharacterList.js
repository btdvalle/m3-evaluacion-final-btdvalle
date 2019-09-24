import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const renderList = props => {
  const { characters } = props;
  return characters.map(character => {
    return (
      <li className="characterlist_li" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
};

const CharacterList = props => {
  if (!props.characters) {
    return (
      <div className="detailpage">
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return <ul className="characterlist">{renderList(props)}</ul>;
  }
};

CharacterList.propTypes = {
  characters: PropTypes.array
};

export default CharacterList;
