<template>
<div>
  <systemBar> </systemBar>
  <produtos productType=3>
  </produtos>
</div>
</template>

<script>
  import produtos from '../components/produtos'
  import systemBar from '../components/systemBar.vue'


  export default {
    name: 'productType3',
    created: false,

    components: {
      produtos,
      systemBar
    },
    created() {
    if(this.$store.state.created == false)
    {
      this.$store.dispatch("getProducts");
      this.$store.commit("setCreated");
    }
  }
  }
</script>
