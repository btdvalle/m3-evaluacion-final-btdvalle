const getEpisodesNames = totalEpisodes => {
  const episodes = totalEpisodes[0];
  const episodesPromises = episodes.map(episodeUrl => fetch(episodeUrl));
  Promise.all(episodesPromises)
    .then(responses => {
      const jsonPromises = responses.map(response => response.json());
      return Promise.all(jsonPromises);
    })
    .then(jsonPromisesData => {
      debugger;
    });
};

const formatEspisodesData = datas => {
  debugger;
  const episodesOfEachCharacter = datas.map(episodesOfEachCaracter => {
    debugger;
    episodesOfEachCaracter.map(promise => {
      promise.then(foo => console.debug(foo));
      //aquí recorro el array de cada episodio, que contiene un objeto que se llama [[PromiseValue]] y contiene el nombre
      return promise;
    });
  });

  //este es un array de 20 (personajes), y cada elemento contiene un array con los episodios en los que sale cada personaje
  return episodesOfEachCharacter;
};
export default getEpisodesNames;
