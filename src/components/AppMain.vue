<script>
import {store} from "../store";

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
      <!-- FILM -->
      <h2 class="pb-4">FILM</h2>
      <div class="d-flex flex-wrap">
        <div class="ms-card" v-for="item in store.filmArray">
          <div class="ms-film-img">
            <img :src="`${store.urlImg}${item.poster_path}`" alt="">
            <h4 class="text-center" v-if="!item.poster_path">IMMAGINE NON DISPONIBILE</h4>
          </div>
          <div class="ms-film-info">
            <p><span>Titolo: </span>{{ item.title }}</p>
            <p><span>Titolo Originale: </span>{{ item.original_title }}</p>
            <p>
              <span>Lingua: </span>
              <img v-if="item.original_language === 'it'" src="../assets/img/Flag_of_Italy.png" alt="">
              <img v-else-if="item.original_language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.png" alt="">
              <img v-else-if="item.original_language === 'es'" src="../assets/img/Flag_of_Spain.png" alt="">
              <p v-else>{{ item.original_language }}</p>
            </p>
            <p>
              <span v-for="i in store.stars">
                <i :class="[(i <= Math.floor(item.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
              </span>
            </p>
            <!-- <p><span class="overview">Descrizione: </span>{{ item.overview }}</p> -->
          </div>
        </div>
      </div>

      <!-- SERIE TV -->
      <h2 class="py-4">TV SERIES</h2>
      <div class="d-flex flex-wrap">
        <div class="ms-card" v-for="item in store.seriesArray">
          <div class="ms-film-img">
            <img :src="`${store.urlImg}${item.poster_path}`" alt="">
            <h4 v-if="!item.poster_path">IMMAGINE NON DISPONIBILE</h4>
          </div>
          <div class="ms-film-info">
            <p><span>Titolo: </span>{{ item.name }}</p>
            <p><span>Titolo Originale: </span>{{ item.original_name }}</p>
            <p>
              <span>Lingua: </span>
              <img v-if="item.original_language === 'it'" src="../assets/img/Flag_of_Italy.png" alt="">
              <img v-else-if="item.original_language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.png" alt="">
              <img v-else-if="item.original_language === 'es'" src="../assets/img/Flag_of_Spain.png" alt="">
              <p v-else>{{ item.original_language }}</p>
            </p>
            <p>
              <span v-for="i in store.stars">
                <i :class="[(i <= Math.floor(item.vote_average / 2)) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
              </span>
            </p>
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
      height: 100%;
      display: none;
    }
    &:hover .ms-film-info{
      display: block;
      overflow-y: auto;
    }
    &:hover .ms-film-img{
      display: none;
    }
    .ms-film-info img{
      width: 30px;
      margin-left: 5px;
    }
    .ms-film-info i{
      font-size: 1.5rem;
      color: gold;
    }
  }
}

</style>