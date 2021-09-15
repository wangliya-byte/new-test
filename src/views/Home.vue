<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import Menu from '@/components/menu.vue';
import Menu from '../components/menu.vue';
// import Suspense from '../demo/suspense.vue';

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
  }
});
</script>
