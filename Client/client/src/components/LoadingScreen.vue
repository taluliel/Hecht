<template>
  <div :class="{ loader: true, fadeout: true }">
    <h2>{{ $t("museum_name") }}</h2>
    <v-row align="center" justify="center">
          <v-img
          class="university"
          alt="university Logo"
          contain
          src="../assets/haifa_uni_logo.png"
          max-width="50px"
        />
  
        <v-img
          class="hecht"
          alt="Hecht Logo"
          contain
          src="../assets/hecht_Logo.png"
          max-width="50px"
        />

    </v-row>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",

  mounted() {},
  methods: {
    gohome: function () {
      this.$router.push(`/`).catch((err) => {
        err;
      });
    },
  },
};
</script>

<style>
.loader {
  background-color: #e0e0d8;
  bottom: 0;
  color: #5c3f55;
  /* display: block; */
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 30vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}

.fadeout {
  animation: fadeout 5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>