<template>
  <v-app light class="grey lighten-4">
    <Navbar />
    <v-main class="ma-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({ })
};
</script>
