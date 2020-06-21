<template>
  <div>
    <Navbar/>
    <JumbotronAdviser/>
    <PanelAdviser/>
    <CardAdviser/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import JumbotronAdviser from '../components/JumbotronAdviser.vue'
import PanelAdviser from '../components/PanelAdviser.vue'
import CardAdviser from '../components/CardAdviser.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'LoanAdviser',
  components: {
    Navbar,
    JumbotronAdviser,
    PanelAdviser,
    CardAdviser,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
