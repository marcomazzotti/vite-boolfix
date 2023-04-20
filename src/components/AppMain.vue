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
    <h2 class="py-4">FILM</h2>
    <div class="wrapper d-flex flex-wrap">
      <div class="ms-card" v-for="item in store.filmArray">
        <div class="ms-film-img">
          <img :src="`${store.urlImg}${item.poster_path}`" alt="">
          <h3 class="text-center" v-if="!item.poster_path">IMMAGINE NON DISPONIBILE</h3>
        </div>
        <div class="ms-film-info">
          <p><span>Titolo: </span>{{ item.title }}</p>
          <p><span>Titolo Originale: </span>{{ item.original_title }}</p>
          <img v-if="item.original_language === 'it'" src="../assets/img/Flag_of_Italy.png" class="ms-flag" alt="">
          <img v-else-if="item.original_language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="ms-flag" alt="">
          <img v-else-if="item.original_language === 'es'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="ms-flag" alt="">
          <p v-else><span>Lingua: </span>{{ item.original_language }}</p>
          <p><span>Voto: </span>{{ item.vote_average }}</p>
          <p><span>Overview: </span>{{ item.overview }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="ms-container">
      <h2 class="py-4">TV SERIES</h2>
      <div class="row row-cols-4">
        <div class="ms-card" v-for="item in store.seriesArray">
          <div class="ms-film-img">
            <img :src="`${store.urlImg}${item.poster_path}`" alt="">
            <h3 v-if="!item.poster_path">IMMAGINE NON DISPONIBILE</h3>
          </div>
          <div class="ms-film-info">
            <p><span>Titolo: </span>{{ item.name }}</p>
            <p><span>Titolo Originale: </span>{{ item.original_name }}</p>
            <img v-if="item.original_language === 'it'" src="../assets/img/Flag_of_Italy.png" class="ms-flag" alt="">
            <img v-else-if="item.original_language === 'en'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="ms-flag" alt="">
            <img v-else-if="item.original_language === 'es'" src="../assets/img/Flag_of_the_United_Kingdom.png" class="ms-flag" alt="">
            <p v-else><span>Lingua: </span>{{ item.original_language }}</p>
            <p><span>Voto: </span>{{ item.vote_average }}</p>
            <p><span>Overview: </span>{{ item.overview }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.ms-container{
  padding: 0 1.5rem;
  margin: 0 auto;
  background-color: black;
  color: white;
  .ms-card{
    width: calc(100% / 5 - 50px);
    margin-bottom: 50px;
    border: 1px solid grey;
    padding: 30px;
    margin: 10px;
    .ms-film-img img{
      width: 100%;
    }
    &:hover .ms-film-info{
    display: block;
    overflow-y: auto;
    }
    &:hover .ms-film-img{
    display: none;
    }
    .ms-flag{
    width: 50px;
    }
    .ms-film-info{
    display: none;
    overflow-y: auto;
    max-height: 500px;
    span{
      font-weight:bold;
    }
    img{
      width: 50px;
    }
  }
  }
  p{
    margin: 1rem 0;
  }
}

</style>