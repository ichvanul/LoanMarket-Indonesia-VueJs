<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 info-panel">
        <div class="row">
          <div class="col-lg">
            <i class="fas fa-home"></i>
            <h4>Kredit Rumah</h4>
          </div>
          <div class="col-lg">
            <i class="fas fa-house-user"></i>
            <h4>Membeli Rumah Pertama Anda</h4>
          </div>
          <div class="col-lg">
            <i class="fas fa-coins"></i>
            <h4>KPR Refinancing</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-lg">
            <i class="fas fa-wallet"></i>
            <h4>Modal Kerja</h4>
          </div>
          <div class="col-lg">
            <i class="fas fa-money-check-alt"></i>
            <h4>Bridging Loan</h4>
          </div>
          <div class="col-lg">
            <i class="fas fa-globe-asia"></i>
            <h4>Licence Opportunity</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style lang="scss" scoped>
.info-panel {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.6);
  margin-top: -195px;
}

.col-lg {
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
}

.col-lg:hover {
  transform: scale(1.1);
  transition: linear 0.25s;
}

.fas {
  font-size: 40px;
  text-align: center;
  color: #00a8ea;
  display: flex;
  justify-content: center;
}

h4 {
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
}
</style>
