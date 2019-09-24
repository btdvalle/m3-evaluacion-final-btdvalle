const getEpisodesNames = episodes => {
  console.log(episodes);
  const promises = episodes.map(episode => {
    return fetch(episode)
      .then(response => response.json())
      .then(data => console.log(data));
    Promises.all(promises).then;
  });
};

export default getEpisodesNames;
