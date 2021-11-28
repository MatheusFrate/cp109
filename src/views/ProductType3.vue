<template>
  <div>
    <v-card height="95vh">
      <navigation />
      <produtos3/>
    </v-card>
  </div>
</template>

<script>
  import produtos3 from '../components/produtos3'
  import navigation from "../components/navigation";


  export default {
    name: 'productType3',

    components: {
      produtos3,
      navigation
    },
  }
</script>
