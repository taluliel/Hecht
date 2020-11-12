<template>
    <v-app-bar
      app
      color="white"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Hecht Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.jpeg"
          transition="scale-transition"
          width="40"
        />
      </div>

        <div class="roomQuery-container">
        <RoomQuery></RoomQuery>
        </div>
      <v-spacer></v-spacer>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title v-on:click="choose('he')">עברית&nbsp;<flag iso="il" /> </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>English&nbsp;<flag iso="us" /> </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>عربيه&nbsp;<flag iso="sa" /> </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    
</template>

<script>

import RoomQuery from './RoomQuery'
export default{
    name:'NavHeader',
    components:{
        RoomQuery
    },
    methods:{
      choose(lang){
        this.$vuetify.lang.current = lang;
      }
    }
}

</script>

<style scoped>
.roomQuery-container{
    width:100%;
    
}
</style>
