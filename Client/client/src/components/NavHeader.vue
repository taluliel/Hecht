<template>
    <v-app-bar
      app
      color="white"
     ז
    >
      <div class="d-flex align-center" >
        <a href="/">
        <v-img
          alt="Hecht Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.jpeg"
          transition="scale-transition"
          width="40"
        />
        </a>
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
          <div>
            <v-btn
            icon
            v-on:click="back()"
        >
            <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </div>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title v-on:click="choose('he')">עברית&nbsp;</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title  v-on:click="choose('en')">English&nbsp;</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title v-on:click="choose('ar')">عربيه&nbsp;</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    
</template>

<script>
import RoomQuery from './RoomQuery'
import EventBus from '../eventBus'

export default{
    name:'NavHeader',
    components:{
        RoomQuery
    },
    methods:{
      choose(lang){
        this.$i18n.locale=lang;
        this.$vuetify.rtl = lang =='he' || lang =='ar';
        EventBus.$emit('locale_changed',lang);
      },
      back(){
        this.$router.back();
      }
    }
}

</script>

<style scoped>
.roomQuery-container{
    width:100%;  
}
.align-center img {
    cursor: pointer;
  }

</style>
