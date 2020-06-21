<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 info-panel">
        <div class="row">
          <div class="col-lg">
            <i class="fas fa-user-circle"></i>
            <h4>Cari Loan Adviser Berdasarkan Nama</h4>
            <form class="form-inline justify-content-center">
              <input class="form-control mr-sm-2" type="search" placeholder="Nama Loan Adviser" aria-label="Search">
              <button class="btn my-2 my-sm-0 button evn-title" type="submit">Cari</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelAdviser'
}
</script>

<style lang="scss" scoped>
.info-panel {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.6);
  margin-top: -130px;
}

.col-lg {
  border-radius: 5px;
  padding: 25px;
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

.button {
  text-align: center;
  border: #00a8ea;
  background-color: #00a8ea;
  color: white;
}

.form-control {
  width: 500px;
}
</style>
