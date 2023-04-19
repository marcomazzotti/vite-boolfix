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