<template>
  <div :class="{ loader: true, fadeout: true }">
     <h2>{{ $t('museum_name') }}</h2>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  
  mounted(){
   
  },
     methods:{
      gohome: function (){
        this.$router.push(`/`).catch(err=>{err})   
      }
    }

};
</script>

<style>
.loader {
  background-color: rgb(236, 195, 141);
  bottom: 0;
  color: rgb(7, 7, 7);
  /* display: block; */
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>