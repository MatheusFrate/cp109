<template>
  <v-container fill-height>
    <v-card class="mx-auto" max-width="830" max-height="81vh" color="grey">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(n, i) in $store.state.products" :key="i">
            <v-card
              v-if="n.Typeid === 3"
              width="380"
              height="20vh"
            >
              <v-img>
                <v-card-title v-text="n.description"></v-card-title>
                <v-card-subtitle> Price: {{ n.price}}
                   </v-card-subtitle>
              </v-img>

              <v-card-actions>
                <v-btn outlined rounded text> Comprar </v-btn>
                <v-btn outlined rounded text> Abrir </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>