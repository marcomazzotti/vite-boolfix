<script>
export default{
  name: "AppHeader"
}
</script>

<template>
  <header>
    <div class="ms-container">
      <h1>BOOLFLIX</h1>
      <div class="ms-search">
        <input type="text" placeholder="Titolo">
        <button>Cerca</button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header{
    background-color: black;
    height: 80px;
    padding: 0 1.5rem;

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