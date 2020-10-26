<template>
<div class="home">
I am in room 

</div>
</template>

<script>

export default{
    name:'home',
    methods:{
      goToRoom: function (){
        this.$router.push(`/room/${this.select}`).catch(err=>{err})      
      }
}
}
</script>

<style scoped>

</style>