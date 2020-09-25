<template>
    <div class="canvas-wrapper">
        {{room}}
        <v-img :src="getImage" class="featureImage"></v-img>
       <div class="rect"/>
    </div>
</template>
<script>
export default {
    name:'featureViewer',
    props:{imageDetails: Object,room:String},
    data(){
        return {image1: this.imageDetails.src}
    },
    methods:{
        init(){
            console.log("we are in init");
            console.log(this.image1)
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
.featureImage{
    clip-path: url(#clip);
}
.rect{
    left:0;
    top:0;
    width:100px;
    height: 100px;
    border:1px solid black;
}
</style>