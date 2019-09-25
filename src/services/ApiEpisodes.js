const getEpisodesNames = totalEpisodes => {
  const promises = totalEpisodes.map(episodesOfEachCharacter => {
    return episodesOfEachCharacter.map(episode => {
      return fetch(episode).then(response => response.json());
      // .then(data => console.log(data));
    });
  });
  Promise.all(promises).then(datas => formatEspisodesData(datas));
};

const formatEspisodesData = datas => {
  const episodesOfEachCharacter = datas.map(episodesOfEachCaracter =>
    console.log(
      episodesOfEachCaracter.map(promise => {
        //aquí recorro el array de cada episodio, que contiene un objeto que se llama [[PromiseValue]] y contiene el nombre
        return promise;
      })
    )
  );

  //este es un array de 20 (personajes), y cada elemento contiene un array con los episodios en los que sale cada personaje
  return episodesOfEachCharacter;
};
export default getEpisodesNames;
