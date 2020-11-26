<template>
  <div class="questions">
    <ol>
      <li v-for="(item, index) in questions" :key="index" v-on:click="goToMovie(item.movieName)">
        {{ item.questionText }}
      </li>
    </ol>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "questions",
  data: () => ({
    featureID: 1,
    questions: []
  }),
  beforeRouteEnter(to, from, next) {
   next(vm =>{
     vm.fetchQuestions(to.params.id)
   })

    //this.featureID = 1;//to.params.id;
   

  
  },
  methods: {
    goToMovie: function (movieName) {
      this.$router.push(`/movie/${movieName}`).catch((err) => {
        err;
      });
    },
    fetchQuestions(featureID){
       db.collection("questions")
      .where("featureID", "==", +featureID)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        //const room = querySnapshot.docs[0].data();
        querySnapshot.docs.map((questionRaw)=>{
          let questionItem = questionRaw.data();
          this.questions.push(questionItem.question[this.$i18n.locale.toUpperCase()])
          
        })
       
        // this.features = room;
        // do something with documents
      });
    }
  },
};
</script>

<style scoped>

</style>
