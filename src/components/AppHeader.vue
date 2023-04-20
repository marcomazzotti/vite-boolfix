<script>
import {store} from "../store";
export default{
  name: "AppHeader",
  emits: [
    "search"
  ],
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <header>
    <div class="ms-container">
      <h1>BOOLFLIX</h1>
      <div class="ms-search">
        <input type="text" placeholder="Inizia la ricerca" v-model.trim="store.userSearch">
        <button @click="$emit('search')">Cerca</button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header{
    background-color: black;
    height: 80px;
    width: 100%;
    padding: 0 1.5rem;
    position: fixed;

    .ms-container{
    display: flex;
    align-items: center;
    justify-content: space-between;

      h1{
        color: red;
        line-height: 80px;
      }

      .ms-search button{
        background-color: red;
        border: 1px solid red;
      }

      .ms-search input{
        border: 1px solid black;
      }
    }
  }
  
</style>