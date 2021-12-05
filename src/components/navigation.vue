<template>
    <v-navigation-drawer absolute permanent left>
      <v-container>
        <center>
          <v-btn icon x-large>
            <router-link to="/" tag="button"><v-icon>mdi-cart</v-icon> product type 1</router-link>
          </v-btn>
        </center>
        <v-spacer> </v-spacer>
        <center>
          <v-btn icon x-large>
            <router-link to="/ProductType2" tag="button"><v-icon>mdi-cart</v-icon> product type 2</router-link>
          </v-btn>
        </center>
        <v-spacer> </v-spacer>
        <center>
          <v-btn icon x-large>
            <router-link to="/ProductType3" tag="button"><v-icon>mdi-cart</v-icon> product type 3</router-link>
          </v-btn>
        </center>
        <v-spacer> </v-spacer>
        <center>
          <v-btn icon x-large>
            <router-link to="/ProductType4" tag="button"><v-icon>mdi-cart</v-icon> Produtos Esgotados</router-link>
          </v-btn>
        </center>
      </v-container>
    </v-navigation-drawer>
</template>


