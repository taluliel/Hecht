<template>
<div class="room">
i am in my room {{currentRoom}}

</div>
</template>

<script>
export default{
    name:'room',
    data:()=> ({
        items:[2000,3000,4000,5000],
        currentRoom:null
    }),
    watch:{
        '$route.params.id': function (id){
           this.currentRoom = id;
        }
    }
    

}
</script>

<style scoped>
.room{
    width:100%;
}
</style>
