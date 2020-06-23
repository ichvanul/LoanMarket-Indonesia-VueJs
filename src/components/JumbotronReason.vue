<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 evn-title">Kenapa Harus Memilih Loan Market?</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-5 info-panel">
          <div class="row">
            <h4 class="evn-title">Tidak dimiliki oleh Bank.</h4>
            <p>100% dimiliki dan dijalankan perusahaan keluarga.</p>
          </div>
          <div class="row">
            <h4 class="evn-title">Penawaran produk kompetitif dan akses ekslusif.</h4>
            <p>Kami mendapatkan akses khusus dari bank dan dapat membandingkan bunga, biaya, fasilitas dan kemudahan aplikasi yang cocok untuk Anda. Kami dapat membantu anda menghemat biaya dan waktu untuk mendapatkan pinjaman</p>
          </div>
          <div class="row">
            <h4 class="evn-title">Kekuatan dalam bernegosiasi.</h4>
            <p>Kami akan menemukan pinjaman yang paling tepat (dari sekian banyak pilihan yang ada) yang telah disesuaikan dengan tujuan finansial dan kebutuhan-kebutuhan Anda. Akses pada penawaran-penawaran eksklusif, dan kemampuan untuk menegosiasikan deal-deal yang lebih baik dalam hal bunga dan pembiayaan. Temukanlah berapa banyak biaya yang dapat Anda hemat!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumbotronReason'
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('../assets/planning.jpg');
  background-size: cover;
  height: 750px;
  margin-top: 50px;
}

.container {
  z-index: 1;
  position: relative;
}

.info-panel {
  text-align: center;
}

.display-4 {
  color: white;
  text-align: center;
  margin-top: -10px;
  font-size: 42px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

h4 {
  color: white;
  text-align: left;
  margin-top: 30px;
  font-size: 24px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

p {
  color: white;
  text-align: justify;
  margin-top: 30px;
  font-size: 16px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .display-4 {
    font-size: 22px;
  }

  h4 {
    font-size: 12px;
  }

  p {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
}
</style>
