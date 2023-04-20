<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import {store} from "./store"
export default{
    data() {
        return {
            store
        };
    },
    components: { AppHeader, AppMain },
    methods: {
    handleSearch(){
      if (this.store.userSearch === ""){
        console.log("ERRORE");
      } else {
        this.getFilm();
        this.getSeries();
        this.store.userSearch = "";
      }
    },
    getFilm() {
      axios
        .get(this.store.urlFilm, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.userSearch
          }
        })
        .then((resp) => {
          this.store.filmArray = resp.data.results;
          console.log(resp);
        })
        .catch(error => {
          console.error(error)
        })
    },
    getSeries(){
      axios
        .get(this.store.urlSeries, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.userSearch
          }
        })
        .then((resp) => {
          this.store.seriesArray = resp.data.results;
          console.log(resp);
        })
        .catch(error => {
          console.error(error)
        })
    },
    getVote(){
      return parseInt(this.item.vote_average / 2)
    }
  }
}
</script>

<template>
  <AppHeader @search="handleSearch"/>
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>