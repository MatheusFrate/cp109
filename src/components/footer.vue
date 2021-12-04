<template>
  <v-footer padless>
    <v-col class="text-center">
       Produto mais comprado:
      {{mostbought.description}}<br>
       Tipo:
       {{mostbought.Typeid}}
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