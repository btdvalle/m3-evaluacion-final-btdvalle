import React from "react";
import CharacterCard from "./CharacterCard";

const renderList = props => {
  const { characters } = props;
  return characters.map(character => {
    return (
      <li key={character.id}>
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

export default CharacterList;
