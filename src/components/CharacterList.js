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
  return <ul className="characterlist">{renderList(props)}</ul>;
};

export default CharacterList;
