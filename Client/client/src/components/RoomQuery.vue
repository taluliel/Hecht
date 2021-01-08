<template>
<div class="roomQuery">
 <v-toolbar flat >
 <!-- <v-toolbar-title>Choose room</v-toolbar-title> -->
  <v-autocomplete 
 
      v-model="select"
      :items="items"
      v-on:change="goToRoom"
      cache-items
      class="white--text"
      flat
      hide-no-data
      hide-details
      hide-selected
      item-text="roomCode"
    item-value="roomCode"
      :label="nav_label"
    ></v-autocomplete>
    
  </v-toolbar>
</div>

</template>

<script>
import {db} from '../main';
export default{
    name:'roomQuery',
    data:()=> ({
        items:[],
        select:null
    }),
    computed:{
      nav_label:function(){
        return this.$t('choose_room');
      }
    },
    firestore(){
    return {
      items: db.collection('Rooms').where('roomCode',"!=",null)
    }
  },
  mounted(){
    
  },
    methods:{
      goToRoom: function (){
        console.log(this.select);
        this.$router.push(`/room/${this.select}`).catch(err=>{err})
      
      }
    }
}
</script>

<style scoped>
.roomQuery{
    width:100%;
  }
</style>