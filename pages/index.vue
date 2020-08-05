<template>
  <v-layout justify-center align-center mt-16>
    <v-flex xs12 sm8 md6>
      <v-card class="mx-auto" max-width="400" rounded>
        <v-card-title>Sign in</v-card-title>
        <v-card-text>
          <v-form @submit="submit">
            <v-text-field
              v-model="login"
              :error-messages="loginErrors"
              label="Login"
              required
              @input="$v.login.$touch()"
              @blur="$v.login.$touch()"
            />

            <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              label="Password"
              type="password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            />

            <v-btn class="mt-2" @click="submit">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mockAuth } from '@/mocks/auth';

export default {
  data: () => ({
    login: '',
    password: '',
  }),

  validations: {
    login: {
      required,
    },
    password: {
      required,
    },
  },

  computed: {
    loginErrors() {
      const errors = [];
      if (!this.$v.login.$dirty) return errors;
      if (!this.$v.login.required) errors.push('Login is required.');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.required) errors.push('Password is required.');
      return errors;
    },
  },

  methods: {
    async submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        const data = {
          login: this.login,
          password: this.password,
        };

        await mockAuth(data);
        await this.$router.push('users/mock');
      }
    },
  },
};
</script>
