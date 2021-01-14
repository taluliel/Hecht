<template>
  <div class="questions">
    <ul>
      <li
        v-for="(item, index) in questions"
        :key="index"
        v-on:click="goToMovie(item.movieName)"
      >
        <v-alert class="text-center"
          :icon="`mdi-numeric-${index + 1}-circle-outline`"
          outlined
          border="bottom"
          color="gray"
          type="info"
        >
          {{ item.questionText }}
        </v-alert>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../main";
import EventBus from '../eventBus'

export default {
  name: "questions",
  data() {
    return {
      featureID: 1,
      questions: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchQuestions(to.params.id);
    });
  },
  mounted(){
    let vm1=this;
    EventBus.$on('locale_changed',function(lang){
      console.log(lang);
        vm1.fetchQuestions(vm1.featureID);
    });
  },
  methods: {
    goToMovie: function (movieName) {
      this.$router.push(`/movie/${movieName}`).catch((err) => {
        err;
      });
    },
    fetchQuestions(featureID) {
      this.featureID = featureID;
      this.questions.length =0;
      db.collection("questions")
        .where("featureID", "==", +featureID)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.docs.map((questionRaw) => {
            let questionItem = questionRaw.data();
            this.questions.push(
              questionItem.question[this.$i18n.locale.toUpperCase()]
            );
          });
        });
    },
  },

};
</script>

<style scoped>
ul {
  padding-left: 0;
  margin-top: 40px;
}
ul li {
  list-style-type: none;
}
</style>
