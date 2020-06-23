<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 evn-title">Kami memiliki Loan Adviser yang selalu siap membantu Anda</h1>
        <p class="lead evn-desc">Dengan lebih 100 Loan Adviser di seluruh Indonesia, kami selalu memiliki seseorang yang selalu siap membantu Anda. Loan Adviser kami akan menghubungi dan bertemu Anda kapan pun Anda mau.</p>
        <router-link to="/adviser" tag="li" class="btn btn-primary button evn-title">Temukan Loan Advisor</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumbotronLoan'
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-color: white;
  height: 360px;
  margin-top: 0px;
  text-align: center;
}

.container {
  z-index: 1;
  position: relative;
}

.display-4 {
  margin-top: 20px;
  font-size: 36px;
}

.lead {
  margin-top: 30px;
  font-size: 20px;
}

.button {
  text-align: center;
  border-radius: 40px;
  border: #00a8ea;
  background-color: #00a8ea;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .display-4 {
    font-size: 22px;
  }

  .lead {
    font-size: 12px;
    margin-bottom: 16px;
  }

  p {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
}
</style>
