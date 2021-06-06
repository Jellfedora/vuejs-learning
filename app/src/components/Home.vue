<template>
  <div class="home">
    <p>Je suis la Home</p>
  </div>
</template>

<script>
import { ref } from "vue";
// import SearchResults from "./SearchResults.vue";
// import Login from "./Login.vue";
export default {
  components: {
    // SearchResults,
    // Login,
  },
  setup() {
    // const email_placeholder = "coucou";
    // const password_placeholder
    // const query = ref("");
    // const reset = (evt) => {
    //   query.value = ""; // clears the query
    // };
    return {
      // reset,
      // query,
      // email_placeholder,
    };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
