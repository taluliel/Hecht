<template>
  <div class="questions">
    <ul>
      <li
        v-for="(item, index) in questions"
        :key="index"
        v-on:click="goToMovie(item.movieName)"
      >
        <div class="question-wrapper">
          <div class="question-icon">
           <img :src="base_url+'assets/icon/'+item.category+'.png'" />   
             
           </div>
          <div class="question">
            {{ item.questionText }}
          </div>
        </div>
        <!-- <v-alert class="text-center"
          :icon="`mdi-numeric-${index + 1}-circle-outline`"
          outlined
          border="bottom"
          color="gray"
          type="info"
        >
         {{ item.questionText }}
        </v-alert> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../main";
import EventBus from "../eventBus";

export default {
  name: "questions",
  data() {
    return {
      featureID: 1,
      questions: [],
      base_url:window.myapp.BASE_URL
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchQuestions(to.params.id);
    });
  },
  mounted() {
    let vm1 = this;
    EventBus.$on("locale_changed", function (lang) {
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
      this.questions.length = 0;
      db.collection("questions")
        .where("featureID", "==", +featureID)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.docs.map((questionRaw) => {
            let questionItem = questionRaw.data();
            this.questions.push({
              category: questionItem.category,
              ...questionItem.question[this.$i18n.locale.toUpperCase()],
            });
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
.question-wrapper {
  display: flex;
  /* color/final/white */

  background: #ffffff;
  /* effect/drop_shadow/patch_banner */

  box-shadow: 0px 3px 5px rgba(11, 14, 36, 0.05);
  border-radius: 12px;
      justify-content: flex-end;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 10px 14px;
    position: static;
    width: 343px;
    height: 80px;
    left: calc(50% - 343px/2);
    top: 0px;
}
.question {
  flex: 5;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: right;
  color: #202447;
  margin: 10px 5px;
}
.question-icon {
  flex: 0.85;
  background: #FBFAF9;
border-radius: 0px 12px 12px 0px;

/* Inside Auto Layout */
align-self: stretch;
margin: 0px 0px;
}
</style>
