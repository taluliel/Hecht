<template>
<div class="home">

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