<template>
  <div class="dashboard">
    <!-- <button @click="fetchJokes(10)" class="dashboard__button">Fetch 10 Jokes</button> -->
    <section class="dashboard__column">
      <h2>All Jokes ({{ jokesLength }})</h2>
      <JokeList v-bind:jokes="jokes"/>
    </section>

    <section class="dashboard__column">
      <h2>Favorite Jokes ({{ favoriteJokesLength }})</h2>
      <JokeList v-bind:jokes="favoriteJokes"/>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import JokeList from './JokeList.vue';
import jokesData from '@/content/jokes';
import { JokesState } from '../store/modules/jokes/types';

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('jokes');

export default Vue.extend({
  name: 'JokeDashboard',
  components: {
    JokeList
  },
  created() {
    this.fetchJokes({ amount: 10 });
  },
  computed: {
    ...mapState({
      jokes: (state: JokesState) => {
        return state.items;
      }
    }),
    ...mapGetters(['jokesLength', 'favoriteJokes', 'favoriteJokesLength'])
  },
  methods: {
    ...mapActions(['fetchJokes'])
  }
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
