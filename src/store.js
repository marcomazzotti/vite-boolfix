import { reactive }  from "vue";

export const store = reactive({
  apiKey: "7a185f243adb11b087b253a553720fa1",
  urlFilm: "https://api.themoviedb.org/3/search/movie",
  urlSeries: "https://api.themoviedb.org/3/search/tv",
  urlImg: "https://image.tmdb.org/t/p/w342",
  userSearch: "",
  filmArray: [],
  seriesArray: [],
  stars: 5,
});