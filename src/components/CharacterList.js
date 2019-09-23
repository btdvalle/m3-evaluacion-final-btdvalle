import React from "react";
import CharacterCard from "./CharacterCard";

const renderList = props => {
  const { characters, action } = props;
  return characters.map(character => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} action={action} />
      </li>
    );
  });
};

const CharacterList = props => {
  return <ul className="characterlist">{renderList(props)}</ul>;
};

export default CharacterList;
