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
  debugger;
  const episodesOfEachCharacter = datas.map(episodesOfEachCaracter => {
    debugger;
    episodesOfEachCaracter.map(promise => {
      promise.then(foo => console.debug(foo));
      //aquí recorro el array de cada episodio, que contiene un objeto que se llama [[PromiseValue]] y contiene el nombre
      return promise;
    });
  });
