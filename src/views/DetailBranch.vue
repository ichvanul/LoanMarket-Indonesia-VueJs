<template>
  <div>
    <Navbar/>
    <ContentBranch v-bind:dataBranch="idBranchs.result[0]"/>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import ContentBranch from '../components/ContentBranch.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DetailBranch',
  components: {
    Navbar,
    ContentBranch,
    Footer
  },
  props: ['id_branch'],
  data () {
    return {
      idBranchs: []
    }
  },
  mounted () {
    axios.get(`http://localhost:5000/api/v1/branch/${this.id_branch}`)
      .then((res) => {
        this.idBranchs = res.data
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
