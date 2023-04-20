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
  <div class="ms-container">
    <h2 class="my-4">FILM</h2>
    <div class="row row-cols-auto">
      <div class="ms-card" v-for="item in store.filmArray">
        <ul>
          <li>
              <img :src="`${store.urlImg}${item.poster_path}`" alt="">
              <h5 v-if="!item.poster_path">IMMAGINE NON DISPONIBILE</h5>
              <p>Titolo: {{ item.title }}</p>
              <p>Titolo Originale: {{ item.original_title }}</p>
              <img v-if="item.original_language === 'it'" src="../assets/img/Flag_of_Italy.png" class="flag" alt="">
              <img v-else-if="item.original_language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="flag" alt="">
              <img v-else-if="item.original_language === 'es'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="flag" alt="">
              <p v-else> {{ item.original_language }}</p>
              <p>Voto: {{ item.vote_average }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="ms-container">
      <h2 class="my-4">TV SERIES</h2>
      <div class="row row-cols-auto">
        <div class="ms-card" v-for="item in store.seriesArray">
          <ul>
          <li>

            <img :src="`${store.urlImg}${item.poster_path}`" alt="">
            <h5 v-if="!item.poster_path">Siamo spiacenti, l'immagine non è disponibile</h5>
            <p>Titolo: {{ item.name }}</p>
            <p>Titolo Originale: {{ item.original_name }}</p>
            <img v-if="item.original_language === 'it'" src="../assets/img/Flag_of_Italy.png" class="flag" alt="">
            <img v-else-if="item.original_language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="flag" alt="">
            <img v-else-if="item.original_language === 'es'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="flag" alt="">
            <p v-else> {{ item.original_language }}</p>
            <p>Voto: {{ item.vote_average }}</p>
          </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.ms-container{
  padding: 0 1.5rem;
  margin: 0 auto;
  ul{
    list-style-type: none;
    padding-left: 0;
    padding-bottom: 1rem;
    p{
      margin: 0;
    }
    .flag{
      width: 50px;
    }
  }
}

</style>