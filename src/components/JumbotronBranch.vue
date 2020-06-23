<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 evn-title">Temukan Cabang yang siap membantu anda sekarang</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumbotronBranch'
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('../assets/salam.jpg');
  background-size: cover;
  height: 480px;
  margin-top: -75px;
}

.container {
  z-index: 1;
  position: relative;
}

.display-4 {
  color: white;
  text-align: center;
  margin-top: 120px;
  font-size: 42px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

.lead {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .display-4 {
    font-size: 28px;
  }
}
</style>
