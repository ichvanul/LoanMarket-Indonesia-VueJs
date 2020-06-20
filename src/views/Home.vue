<template>
  <div>
    <Navbar/>
    <Jumbotron/>
    <Panel/>
    <Bank/>
    <Reason/>
    <Loan/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Jumbotron from '../components/Jumbotron.vue'
import Panel from '../components/Panel.vue'
import Bank from '../components/Bank.vue'
import Reason from '../components/JumbotronReason.vue'
import Loan from '../components/JumbotronLoan.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Jumbotron,
    Panel,
    Bank,
    Reason,
    Loan,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
