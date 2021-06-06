<template>
  <div class="app-container">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  min-height: 100vh;
}
/* Animate when route change */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
