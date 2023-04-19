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
  <div class="film-container">
    <h2>FILM</h2>
    <div class="row">
      <ul v-for="elemento in store.filmArray">
      <li>
        <p>Titolo: {{ elemento.title }}</p>
        <p>Titolo Originale: {{ elemento.original_title }}</p>
        <p>Lingua: {{ elemento.original_language }}</p>
        <p>Voto: {{ elemento.vote_average }}</p>
      </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>