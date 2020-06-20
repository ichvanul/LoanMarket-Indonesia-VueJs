<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 evn-title">Kenapa Harus Memilih Loan Market?</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-8 info-panel">
          <div class="row">
            <div class="col-lg">
              <h4 class="evn-title">Kami akan menemukan kredit yang paling tepat untuk Anda</h4>
              <p>Kami akan menemukan pinjaman yang paling tepat (dari sekian banyak pilihan yang ada) yang telah disesuaikan dengan tujuan finansial dan kebutuhan-kebutuhan Anda.</p>
            </div>
            <div class="col-lg">
              <h4 class="evn-title">Kemampuan untuk menegosiasikan deal-deal yang lebih baik</h4>
              <p>Kami memiliki akses pada penawaran-penawaran eksklusif, dan kemampuan untuk menegosiasikan deal-deal yang lebih baik dalam hal bunga dan pembiayaan. Temukanlah berapa banyak biaya yang dapat Anda hemat!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg">
              <h4 class="evn-title">Mudah dan cepat</h4>
              <p>Loan Adviser kami akan menyelesaikan semua dokumen yang diperlukan dan menangani jalannya proses sehingga Anda tidak perlu lagi pusing memikirkannya.</p>
            </div>
            <div class="col-lg">
              <h4 class="evn-title">Konsultasi tanpa biaya</h4>
              <p>Tidak ada biaya untuk Anda karena yang membayar kami adalah para kreditur. Loan Adviser kami benar-benar bekerja keras untuk mencapai tujuan Anda karena kami hanya akan dibayar jika pinjaman KPR Anda disetujui.</p>
            </div>
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

.display-4 {
  color: white;
  text-align: center;
  margin-top: 40px;
  font-size: 42px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

h4 {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 24px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

p {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}
</style>
