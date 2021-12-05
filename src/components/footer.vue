<template>
  <v-footer padless>
    <v-col class="text-center">
       Produto mais comprado:
      {{mostbought.name}}<br>
       Quantidade
      {{mostbought.bought}}
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  computed: {
    mostbought() {
      return this.$store.getters.getMostBought
    }
  },
}
</script>