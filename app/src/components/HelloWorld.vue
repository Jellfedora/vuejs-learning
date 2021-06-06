<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <Login /> -->
    <login
      pseudo_placeholder="Votre pseudo"
      password_placeholder="Votre mot de passe"
    />
    <!-- <h2>Filter LearnVue Articles</h2>
    <input type="text" placeholder="Filter Search" v-model="query" />
    <br />
    <button @click="reset">Reset</button> -->
    <!-- <search-results :query="query" /> -->
  </div>
</template>

<script>
import { ref } from "vue";
// import SearchResults from "./SearchResults.vue";
import Login from "./Login.vue";
export default {
  components: {
    // SearchResults,
    Login,
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
