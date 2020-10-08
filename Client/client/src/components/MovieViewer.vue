<template>
<div class="questionCategories">
    Question 1: 
    <ol>
        <li>
            What?
        </li>
        <li>
            What?
        </li>
        <li>
            What?
        </li>
        <li>
            What?
        </li>
        <li>
            What?
        </li>
        
    </ol>
</div>
</template>

<script>
export default{
    name:'movieViewer',
    data:()=> ({
      
    }),
    methods:{
      goToRoom: function (){
        this.$router.push(`/room/${this.select}`).catch(err=>{err})

      }
    }

}
</script>

<style scoped>

</style>
