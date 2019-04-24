<template>
  <ul v-if="hasJokes" class="joke-list">
    <li v-for="joke in jokes" v-bind:key="joke.id" :joke="joke" class="joke-list__item">
      <Joke :text="joke.joke" :id="joke.id" :isFavorite="joke.isFavorite"/>
    </li>
  </ul>
</template>

<script>
import Joke from './Joke.vue';

export default {
  name: 'JokeList',
  components: {
    Joke
  },
  props: {
    jokes: Array
  },

  computed: {
    hasJokes: function() {
      return this.jokes.length;
    }
  }
};
</script>

<style>
.joke-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.joke-list__item {
  display: block;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
}
</style>
