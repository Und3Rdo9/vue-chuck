<template>
  <div class="dashboard">
    <div class="dashboard__controls">
      <button
        v-if="jokesLength === 0"
        @click="fetchJokes({amount: 10})"
        class="dashboard__button"
      >Fetch 10 random jokes</button>
      <button
        @click="TOGGLE_AUTO_FETCH()"
        class="dashboard__button"
      >Toggle autofetching a joke every 5 seconds</button>
    </div>
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

const {
  mapState,
  mapActions,
  mapGetters,
  mapMutations
} = createNamespacedHelpers('jokes');

export default Vue.extend({
  name: 'JokeDashboard',
  components: {
    JokeList
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
    ...mapActions(['fetchJokes']),
    ...mapMutations(['TOGGLE_AUTO_FETCH'])
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

.dashboard__controls {
  grid-column: 1 / span 2;
  display: flex;
  justify-content: center;
}

.dashboard__button {
  background-color: #39b982;
  color: white;
  font-size: 18px;
  box-shadow: none;
  appearance: none;
  padding: 0 30px;
  margin: 10px;
  border-radius: 30px;
  line-height: 50px;
}

.dashboard__column {
  text-align: center;
}
</style>
