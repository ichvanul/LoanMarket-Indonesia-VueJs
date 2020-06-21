<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container">
        <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto evn-title text-dark">
            <li class="nav-item">
              <router-link to="/adviser" tag="li"><a class="nav-link">Cari Loan Adviser</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/branch" tag="li"><a class="nav-link">Branch</a></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">Produk</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Kalkulator Simulasi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Bantuan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Kenapa Loan Market?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Kontak Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  z-index: 1;
}

.navbar-brand {
  font-size: 32px;
}

.nav-link {
  text-transform: uppercase;
  color: #00a8ea;
  margin-right: 30px;
  font-size: 12px;
  cursor: pointer;
}

.nav-link:hover::after {
  content: '';
  display: block;
  border-bottom: 3px solid #00a8ea;
  width: 50%;
  margin: auto;
  padding-bottom: 5px;
  margin-bottom: -8px;
}

img {
  width: 50px;
  height: 50px;
}
</style>
