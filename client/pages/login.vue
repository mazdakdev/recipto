<!-- pages/login.vue -->
<!-- This contains the login form. You should also add some custom validation yourself. -->
<template>
  <div class="login-page">
   user:
    <form method="post" @submit.prevent="logInUser">
      user:
      <input type="text" v-model="userData.username">
      email
      <input type="text" v-model="userData.email">
      pass
      <input type="text" v-model="userData.password">
      <input type="submit" >
    </form>
  </div>
</template>

<script>
import Index from "@/pages/index";
export default {
  components: {Index},
  data: () => ({
    userData: { email: '', password: '', username:'' },

  }),
  methods: {
    async logInUser(userData ) {
      try {
        await this.$auth.loginWith('local', {
          data: userData,
        })
        console.log('notification successful')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
