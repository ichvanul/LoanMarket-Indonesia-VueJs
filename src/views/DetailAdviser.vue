<template>
  <div>
    <Navbar/>
    <ContentAdviser v-bind:dataAdviser="idAdvisers.result[0]"/>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import ContentAdviser from '../components/ContentAdviser.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DetailAdviser',
  components: {
    Navbar,
    ContentAdviser,
    Footer
  },
  props: ['id_adviser'],
  data () {
    return {
      idAdvisers: []
    }
  },
  mounted () {
    axios.get(`http://localhost:5000/api/v1/adviser/${this.id_adviser}`)
      .then((res) => {
        this.idAdvisers = res.data
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
