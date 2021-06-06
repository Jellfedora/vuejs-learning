<template>
  <div class="root">
    <h2>Connexion</h2>
    <div class="login__form" v-if="!showForm">
      <font-awesome-icon icon="cog" spin size="3x" />
    </div>
    <form class="login__form" v-if="showForm">
      <div class="login__form__inputs">
        <input
          name="pseudo"
          class="login__form__inputs__input"
          :class="validPseudo()"
          type="text"
          :placeholder="pseudo_placeholder"
          v-model="pseudo"
          @input="validPseudo"
          @focusin="focus(true)"
          @focusout="focus(false)"
        />
        <label for="pseudo" class="login__form__inputs__label"
          >Cinq caractéres minimum</label
        >
      </div>
      <div class="login__form__inputs">
        <input
          class="login__form__inputs__input"
          :class="passwordValid()"
          name="password"
          type="password"
          :placeholder="password_placeholder"
          v-model="password"
          @input="validPassword"
        />
        <label for="password" class="login__form__inputs__label"
          >Cinq caractéres minimum</label
        >
      </div>
      <div class="login__form__buttons">
        <button @click="reset" class="login__form__reset">Réinitialiser</button>
        <transition name="slide-fade">
          <button @click="submit" v-if="showSubmit" class="login__form__submit">
            Valider
          </button>
        </transition>
      </div>
    </form>
    <router-link to="/home">Allez à l'accueil</router-link>

    <!-- <div ref="elRef">Salut toi</div> -->
  </div>
</template>
<script>
import { computed, onMounted, onUpdated, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  props: {
    pseudo_placeholder: String,
    password_placeholder: String,
    pseudoIsValid: Boolean,
    passwordIsValid: Boolean,
    showForm: Boolean,
    showSubmit: Boolean,
  },
  methods: {
    focus(value) {
      this.hasfocus = value;
      console.log(this);
    },
  },

  //   Setup éxécuté avant de créer lobjet composant
  setup(props, context) {
    //   ref définit une variable réactive
    // const elRef = ref(null);
    const showForm = ref(true);
    const showSubmit = ref(false);
    const pseudo = ref("");
    const password = ref("");
    const pseudoIsValid = ref(null);
    const passwordIsValid = ref(null);
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      console.log(route);
    });
    onUpdated(() => {
      if (password.value.length >= 5 && pseudo.value.length >= 5) {
        console.log("okkk");
        showSubmit.value = true;
      } else {
        showSubmit.value = false;
      }
    });

    const validPseudo = () => {
      if (pseudo.value.length == 0) {
        return "";
      } else if (pseudo.value.length >= 5) {
        pseudoIsValid.value = true;
        return "input_valid";
      } else {
        pseudoIsValid.value = false;
        return "input_no_valid";
      }
    };

    const passwordValid = () => {
      if (password.value.length == 0) {
        return "";
      } else if (password.value.length >= 5) {
        passwordIsValid.value = true;
        return "input_valid";
      } else {
        passwordIsValid.value = false;
        return "input_no_valid";
      }
    };

    const submit = (evt) => {
      evt.preventDefault();
      showForm.value = false;

      router.push("home");
    };

    const reset = (evt) => {
      pseudo.value = "";
      password.value = "";
    };

    return {
      pseudo,
      password,
      submit,
      reset,
      validPseudo,
      //   elRef,
      passwordValid,
      showForm,
      showSubmit,
    };
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h2 {
  width: 100%;
  color: #35495e;
}

.login__form {
  height: 15em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 20em;
  align-items: center;
}

.login__form__inputs {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  margin-bottom: 1em;
}
.login__form__inputs__input {
  width: 100%;
  height: 1em;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #35495e;
  margin-bottom: 0.5em;
}
.login__form__inputs__label {
  width: 100%;
  margin-bottom: 1em;
  font-size: 0.7em;
  font-weight: bold;
}
.login__form__buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition-duration: 0.5s;
}
button {
  background-color: #35495e;
  color: white;
  border: none;
  border-radius: 5px;
  height: 2.5em;
  font-weight: bold;
  width: 10em;
  margin-bottom: 1em;
  cursor: pointer;
}
button:hover {
  background-color: #202d3a;
}
.input_valid {
  border: 1px solid #41b882;
}
.input_valid:focus {
  border: 2px solid #41b882;
  outline: none;
}
.input_no_valid {
  border: 1px solid red;
}
.input_no_valid:focus {
  border: 2px solid red;
  outline: none;
}
.empty_input {
  border: 1px solid black;
}
/* Submit transition */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
/* @media only screen and (max-width: 576px) {
  form {
    width: 100%;
  }
} */
</style>
