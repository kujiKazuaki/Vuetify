<template>
  <div class="app">
    <div class="header">
      <Header />
    </div>
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderLink.vue"

export default {
  components: {
    Header,
  },
}
</script>

<style scoped>
.app {
  margin: 0px;
  padding: 0px;
}
</style>
