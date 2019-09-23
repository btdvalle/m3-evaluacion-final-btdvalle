const getDataFromApi = () => {
  return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json")
    .then(response => response.json())
    .then(data => formatData(data.results));
};

const formatData = results => {
  return results.map(character => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      gender: character.gender,
      species: character.species,
      location: character.location,
      status: character.status,
      episodes: character.episode
    };
  });
};

export default getDataFromApi;
