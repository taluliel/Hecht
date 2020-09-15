<template>
<div class="roomQuery">
 <v-toolbar  color="primary" flat >
 <v-toolbar-title>Choose room</v-toolbar-title>
  <v-autocomplete
 
      v-model="select"
      :items="items"
      v-on:change="goToRoom"
      cache-items
      class="mx-8 white--text"
      flat
      hide-no-data
      hide-details
      label="Which room are you ?"
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>

</div>
</template>

<script>
export default{
    name:'roomQuery',
    data:()=> ({
        items:[2000,3000,4000,5000],
        select:null
    }),
    methods:{
      goToRoom: function (){
        this.$router.push(`/room/${this.select}`)
      
      }
    }

}
</script>

<style scoped>
.roomQuery{
    width:100%;
}
</style>
