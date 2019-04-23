<template>
  <article class="joke">
    <p class="joke__text">{{text | decodeEntities}}</p>
    <button class="joke__add-favorite">Favorite this joke {{id}}</button>
  </article>
</template>

<script lang="ts">
import he from "he";

export default {
  // TODO adds joke controls actions
  name: "Joke",
  props: {
    text: String,
    id: Number
  },
  filters: {
    // TODO move to global filter
    decodeEntities: (value: string): string => {
      return he.decode(value);
    }
  }
};
</script>

<style>
.joke {
  text-align: left;
  display: flex;
}

.joke__text {
  max-width: 70%;
  flex: 0 0 70% 70%;
}

.joke__add-favorite {
  max-width: 30%;
  flex: 0 0 30% 30%;
  margin-left: auto;
}
</style>
