<template>
<div class="container">
  <div class="d-flex justify-content-between row">
    <div v-for="card in advisers" :key="card">
      <div class="card mt-4 mb-3" style="width: 16rem;">
        <img :src="card.image" style="height: 310px; object-fit: cover;" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text evn-title"> {{ card.name }} </p>
        </div>
      </div>
    </div>
  </div>

  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
        <a class="page-link" style="cursor:pointer" @click="prevPages">Sebelumnya</a>
        </li>
        <li class="page-item" v-for="pagination in totalPage" :key="pagination">
          <a class="page-link" style="cursor:pointer"
        @click="pages(pagination)">{{ pagination }}</a></li>
        <li class="page-item next">
        <a class="page-link" style="cursor:pointer" @click="nextPages">Selanjutnya</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CardAdviser',
  data () {
    return {
      advisers: [],
      container: '',
      currentPage: 1,
      totalPage: [],
      url: 'http://localhost:5000/api/v1/adviser?page='
    }
  },
  methods: {
    pages (id) {
      this.currentPage = 0 + id
      axios.get(`http://localhost:5000/api/v1/adviser?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.advisers = res.data.result[3]
          console.log(res.data)
        })
    },
    nextPages () {
      if (this.currentPage === this.totalPage) {
        this.currentPage = this.totalPage
      } else {
        this.currentPage += 1
      }
      axios.get(`http://localhost:5000/api/v1/adviser?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.advisers = res.data.result[3]
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0]
        })
        .catch(() => {
        })
    },
    prevPages () {
      if (this.currentPage === 1) {
        this.currentPage = 1
      } else {
        this.currentPage -= 1
      }
      axios.get(`http://localhost:5000/api/v1/adviser?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.advisers = res.data.result[3]
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0]
        })
        .catch(() => {
        })
    }
  },
  mounted () {
    axios.get(`http://localhost:5000/api/v1/adviser?page=${this.currentPage}`)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        this.advisers = res.data.result[3]
        // eslint-disable-next-line prefer-destructuring
        this.totalPage = res.data.result[0]
      })
  }
}
</script>

<style lang="scss" scoped>

.card {
  cursor: pointer;
}

.card:hover {
  transform: scale(1.1);
  transition: linear 0.5s;
}

</style>
