<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 evn-title">Kesulitan saat mengajukan pinjaman? <br>
        Jangan khawatir, Loan Adviser kami siap membantu Anda.</h1>
        <p class="lead evn-desc">Lebih dari 100 Loan Adviser yang tersebar di Indonesia siap menemui dan menghubungi Anda kapanpun.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumbotronAdviser'
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
  margin-top: 80px;
  font-size: 36px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

.lead {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}
</style>
