<script>
import {store} from "../store"

export default {
  name: "AppMain",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="ms-film-container">
    <h2 class="my-4">FILM</h2>
    <div class="row row-cols-4 g-5">
      <div class="ms-card" v-for="elemento in store.filmArray">
        <ul>
        <li>
          <p>Titolo: {{ elemento.title }}</p>
          <p>Titolo Originale: {{ elemento.original_title }}</p>
          <p>Lingua: {{ elemento.original_language }}</p>
          <p>Voto: {{ elemento.vote_average }}</p>
        </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="ms-serie-container">
      <h2 class="my-4">TV SERIES</h2>
      <div class="row row-cols-4 g-5">
        <div class="ms-card" v-for="elemento in store.seriesArray">
          <ul>
          <li>
            <p>Titolo: {{ elemento.name }}</p>
            <p>Titolo Originale: {{ elemento.original_name }}</p>
            <p>Lingua: {{ elemento.original_language }}</p>
            <p>Voto: {{ elemento.vote_average }}</p>
          </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.ms-film-container, .ms-serie-container{
  padding: 0 1.5rem;

  ul{
    list-style-type: none;
  }
}

</style>