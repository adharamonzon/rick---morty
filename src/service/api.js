const getDataFromApi = () => {
  return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          origin: character.origin.name,
          status: character.status,
          episodes: character.episode,
        };
      });
    });
};

export default getDataFromApi;
