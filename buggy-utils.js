// Fix #1: "=" assigned the genre (and mutated the data); "===" compares.
export const getDramas = series => series.filter(show => show.genre === "Drama");

// Fix #2: the id from the URL is a string, the data holds numbers.
export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id === Number(idText));

// Fix #3: copy the whole path down to the changed season, not just the top level.
export const addEpisodeToFirstSeason = (show, episode) => ({
  ...show,
  seasons: show.seasons.map((season, index) =>
    index === 0 ? { ...season, episodes: [...season.episodes, episode] } : season
  ),
});
