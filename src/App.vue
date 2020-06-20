<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Rubik:wght@500&display=swap');

  *{
    margin: 0;
    padding: 0;
  }
  #app {
    min-height: 100vh;
  }
  .evn-title{
    font-family: 'Rubik', sans-serif;
  }
  .evn-desc{
    font-family: 'Poppins', sans-serif;
  }
</style>
