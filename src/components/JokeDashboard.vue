<template>
  <div class="dashboard">
    <section class="dashboard__column">
      <h2>All Jokes</h2>
      <JokeList v-bind:jokes="jokes"/>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JokeList from "./JokeList.vue";
import jokesData from "@/content/jokes";

export default Vue.extend({
  name: "JokeDashboard",
  components: {
    JokeList
  },
  data: function() {
    return {
      jokes: jokesData
    };
  }
  //   computed: {
  //       favoriteJokes: () => {
  //           return this.jokes.filter(joke => joke.favorite)
  //       }
  //   }
});
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
}

.dashboard__column {
  text-align: center;
}
</style>
