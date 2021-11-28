<template>
  <div>
    <v-card height="95vh">
      <navigation />
      <produtos2/>
    </v-card>
  </div>
</template>

<script>
  import produtos2 from '../components/produtos2'
  import navigation from "../components/navigation";


  export default {
    name: 'productType2',
    components: {
      produtos2,
      navigation
    },
    
    
  }

  
</script>
