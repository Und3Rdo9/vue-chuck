<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <JokeDashboard/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import JokeDashboard from '@/components/JokeDashboard.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    JokeDashboard
  }
});
</script>
