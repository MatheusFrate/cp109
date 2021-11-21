<template>
  <div>
    <systemBar/>
    <appBar/>
    <navigation/>
    <Footer/>
    <bottomNavigation/>
  </div>
</template>


<script>
  import systemBar from '../components/systemBar'
  import navigation from '../components/navigation'
  import appBar from '../components/appBar'
  import  Footer  from "../components/Footer"
  import bottomNavigation from '../components/bottomNavigation'


  export default {
    name: 'Af',

    components: {
      systemBar,
      appBar,
      Footer,
      navigation,
      bottomNavigation,
    },
  }
</script>
