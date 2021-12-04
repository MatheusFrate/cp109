<template>
<div>
  <systemBar> </systemBar>
  <produtos itemId=3>
  </produtos>
</div>
</template>

<script>
  import produtos from '../components/produtos'
  import systemBar from '../components/systemBar.vue'


  export default {
    name: 'productType3',

   computed: {
      myProducts () {
        return this.$store.state.products
      } 
    },
    components: {
      produtos,
      systemBar
    }
  }
</script>
