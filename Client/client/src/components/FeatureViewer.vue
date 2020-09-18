<template>
    <div class="canvas-wrapper">
        <v-img :src="getImage"></v-img>
    </div>
</template>
<script>
export default {
    name:'featureViewer',
    props:{imageDetails: Object},
    data:()=>{
        return {image:'https://picsum.photos/id/11/100/60'}
    },
    methods:{
        init(){
            console.log("we are in init");
            console.log(this.imageDetails.src)
        }
    },
    computed:{
        getImage: function(){
            return this.imageDetails.src;
        }
    },
    updated(){
        this.init();
    }
}
</script>
<style scoped>

</style>