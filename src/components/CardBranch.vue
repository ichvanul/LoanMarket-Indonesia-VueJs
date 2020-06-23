<template>
<div class="container">
  <div class="body-card d-flex justify-content-between row">
    <div v-for="card in branchs" :key="card.result">
      <div class="card mt-4 mb-3" style="width: 16rem; object-fit: cover;">
        <img src="../assets/logo.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text evn-title"> <router-link :to="'/detailbranch/'+card.id_branch">
          {{ card.name }} </router-link></p>
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
  name: 'CardBranch',
  props: ['branch'],
  data () {
    return {
      inputSearch: '',
      feed: null,
      branchs: [],
      container: '',
      currentPage: 1,
      totalPage: [],
      url: 'http://localhost:5000/api/v1/branch?page='
    }
  },
  methods: {
    pages (id) {
      this.currentPage = 0 + id
      axios.get(`http://localhost:5000/api/v1/branch?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.branchs = res.data.result[3]
          console.log(res.data)
        })
    },
    nextPages () {
      if (this.currentPage === this.totalPage) {
        this.currentPage = this.totalPage
      } else {
        this.currentPage += 1
      }
      axios.get(`http://localhost:5000/api/v1/branch?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.branchs = res.data.result[3]
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
      axios.get(`http://localhost:5000/api/v1/branch?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.branchs = res.data.result[3]
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0]
        })
        .catch(() => {
        })
    }
  },
  mounted () {
    axios.get(`http://localhost:5000/api/v1/branch?page=${this.currentPage}`)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        this.branchs = res.data.result[3]
        // eslint-disable-next-line prefer-destructuring
        this.totalPage = res.data.result[0]
      })
  }
  // computed: {
  //   // eslint-disable-next-line vue/no-dupe-keys
  //   branchs: function () {
  //     var photos = this.photoFeed
  //     var inputSearch = this.inputSearch

  //     if (!inputSearch) {
  //       return photos
  //     }

  //     searchString = inputSearch.trim().toLowerCase()

  //     photos = photos.filter(function (item) {
  //       if (item.author.toLowerCase().indexOf(inputSearch) !== -1) {
  //         return item
  //       }
  //     })

  //     return photos
  //   }
  // }
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

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .body-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
