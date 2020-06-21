<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 info-panel">
        <div class="row">
          <div class="col-lg">
            <i class="fas fa-building"></i>
            <h4>Cari Cabang Berdasarkan Nama</h4>
            <form class="form-inline justify-content-center" @submit.prevent="$emit('enter')">
              <input class="form-control mr-sm-2" v-model="inputSearch" @input="search"
              type="search" placeholder="Nama Cabang" aria-label="Search">
              <button class="btn my-2 my-sm-0 button evn-title">Cari</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PanelBranch',
  data () {
    return {
      inputSearch: null
    }
  },
  methods: {
    search () {
      let searchBranch = []
      axios(`http://localhost:5000/api/v1/branch?search=${this.inputSearch.toLowerCase()}`)
        .then((res) => {
          searchBranch = res.data
          this.$emit('search-branch', searchBranch, this.inputSearch)
        })
    }
  }
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
