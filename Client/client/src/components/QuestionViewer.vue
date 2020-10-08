<template>
<div class="questionCategories" dir="rtl">
    {{features[1].featureName}}
    <br/>
    <ol>
        <li v-for="(item,index) in features[1].categories" :key="index">
            {{item.questionText}}
        </li>
    </ol>
</div>
</template>

<script>
export default{
    name:'questionCategories',
    data:()=> ({
      featureID:1,
      features:{
          1:{featureName:'Egyptians sarcofage',categories:[
              {categoryName:'arts',categoryIcon:'paint.png',questionText:'מה הם המאפיינים של ארונות קבורה מצריים?'},
              {categoryName:'judaism',categoryIcon:'magen.png',questionText:'כיצד ארונות אלה נתגלו?'},
              {categoryName:'general',categoryIcon:'house.png',questionText:'במה תורמת תצוגת הארון לתערוכה?'},
              {categoryName:'religions',categoryIcon:'religions.png',questionText:'מה ארונות קבוה אלה יכולים ללמד אותנו על מנהגי הקבורה?'}]}
      }
    }),
    beforeRouteUpdate(to,from,next){
        this.featureID = 1;//to.params.id;
        next();
    },
    methods:{
      goToRoom: function (){
        this.$router.push(`/room/${this.select}`).catch(err=>{err})

      }
    }

}
</script>

<style scoped>

</style>
