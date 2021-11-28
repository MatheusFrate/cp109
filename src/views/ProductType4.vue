<template>
  <div>
    <v-card height="95vh">
      <navigation />
      <produtos4/>
    </v-card>
  </div>
</template>

<script>
  import produtos4 from '../components/produtos4'
  import navigation from "../components/navigation";


  export default {
    name: 'Home',

    components: {
      produtos4,
      navigation
    },
  }
</script>
