<template>
<div class="movieViewer">
  
     <vue-core-video-player width="450" src="./vidoe2.mp4"></vue-core-video-player>
  <!-- <video width="450" controls  :src="movies[selectedMovie]"></video> -->
</div>
</template>

<script>
// import video1 from '../assets/video1.mp4';

export default{
    name:'movieViewer',
    data:()=> ({
      movies:{
          1:'./vidoe2.mp4'
      },
      selectedMovie:null
    }),
    mounted(){
        this.selectedMovie = this.$route.params.id;
        console.log(this.$route.params.id)
    },
    methods:{   
      goToRoom: function (){
        this.$router.push(`/room/${this.select}`).catch(err=>{err})

      }
    }

}
</script>

<style scoped>
video {
  /* override other styles to make responsive */
  width: 100%    !important;
  height: auto   !important;
}
</style>
