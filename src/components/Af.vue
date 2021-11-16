<template>
  <div>
    <systemBar/>
    <appBar/>
    <navigation/>
    <footerr/>
    <bottomNavigation/>
  </div>
</template>


<script>
  import systemBar from '../components/systemBar'
  import navigation from '../components/navigation'
  import appBar from '../components/appBar'
  import Footerr from '../components/Footerr'
  import bottomNavigation from '../components/bottomNavigation'


  export default {
    name: 'Af',

    components: {
      systemBar,
      appBar,
      Footerr,
      navigation,
      bottomNavigation,
    },
  }
</script>
