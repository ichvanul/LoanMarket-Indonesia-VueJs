<template>
  <div>
    <Navbar/>
    <JumbotronBranch/>
    <PanelBranch @search-branch="search"/>
    <CardBranch/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import JumbotronBranch from '../components/JumbotronBranch.vue'
import PanelBranch from '../components/PanelBranch.vue'
import CardBranch from '../components/CardBranch.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Branch',
  components: {
    Navbar,
    JumbotronBranch,
    PanelBranch,
    CardBranch,
    Footer
  },
  data () {
    return {
      branch: {},
      counter: 1
    }
  },
  methods: {
    search (searchBranch, inputSearch) {
      this.counter = 1
      this.branch = searchBranch
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
