<template>
  <div>
    <div class="jumbotron container jumbotron-fluid">
      <div>
        <h1 class="display-4 evn-title">Profil Branch</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-5 info-panel">
          <div class="row">
            <img src="../assets/logo.png" style="height: 400px; object-fit: cover;" alt="..." class="img-thumbnail">
          </div>
        </div>
        <div class="col-5 info-panel mx-5">
          <div class="row">
            <h4 class="name evn-title">{{ dataBranch.name }}</h4>
            <p class="address evn-desc"> {{ dataBranch.name }} terletak di {{ dataBranch.address }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBranch',
  props: ['dataBranch']
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-color: white;
}

.name {
  font-size: 36px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .display-4 {
    font-size: 30px;
    text-align: center;
  }

  .img-thumbnail {
    width: 500px;
    height: 200px;
    object-fit: cover;
  }

  h4 {
    text-align: justify;
  }

  p {
    text-align: justify;
  }
}
</style>
