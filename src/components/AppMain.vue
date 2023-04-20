<script>
import {store} from "../store";
import LangFlag from "vue-lang-code-flags";

export default {
  name: "AppMain",
  components:{
    LangFlag
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="ms-container">
      <!-- FILM -->
      <h2 class="pb-4">FILM</h2>
      <div class="d-flex flex-wrap">
        <div class="ms-card" v-for="item in store.filmArray">
          <div class="ms-film-img">
            <img :src="`${store.urlImg}${item.poster_path}`" alt="">
            <h3 class="text-center" v-if="!item.poster_path">IMMAGINE NON DISPONIBILE</h3>
          </div>
          <div class="ms-film-info">
            <p><span>Titolo: </span>{{ item.title }}</p>
            <p><span>Titolo Originale: </span>{{ item.original_title }}</p>
            <span>Lingua: </span><lang-flag v-if="item.original_language" :iso="`${item.original_language}`"/>
            <p><span>Voto: </span>{{ item.vote_average }}</p>
            <p><span class="overview">Descrizione: </span>{{ item.overview }}</p>
          </div>
        </div>
      </div>

      <!-- SERIE TV -->
      <h2 class="py-4">TV SERIES</h2>
      <div class="d-flex flex-wrap">
        <div class="ms-card" v-for="item in store.seriesArray">
          <div class="ms-film-img">
            <img :src="`${store.urlImg}${item.poster_path}`" alt="">
            <h3 v-if="!item.poster_path">IMMAGINE NON DISPONIBILE</h3>
          </div>
          <div class="ms-film-info">
            <p><span>Titolo: </span>{{ item.name }}</p>
            <p><span>Titolo Originale: </span>{{ item.original_name }}</p>
            <span>Lingua: </span><lang-flag v-if="item.original_language" :iso="`${item.original_language}`"/>
            <p><span>Voto: </span>{{ item.vote_average }}</p>
            <!-- <p><span>Descrizione: </span>{{ item.overview }}</p> -->
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped lang="scss">
.ms-container{
  padding: 100px 1.5rem;
  background-color: black;
  color: white;
  height: 100vh;
  overflow-y: auto;
  .ms-card{
    width: calc(100% / 6);
    padding: 1.5rem;
    border: 1px solid white;
    margin: 20px;
    .ms-film-img img{
      width: 100%;
    }
    .ms-film-info{
      width: 100%;
      display: none;
    }
    &:hover .ms-film-info{
      display: block;
    }
    &:hover .ms-film-img{
      display: none;
    }
  }
}

</style>