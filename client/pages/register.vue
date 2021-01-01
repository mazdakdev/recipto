<template>
  <form method="post" @submit.prevent="submit">
    email:
    <input type="email" v-model="email">
    user:
    <input type="text" v-model="username">
    pass:
    <input type="password" v-model="pass">
    <input type="submit" value="submit">
  </form>
</template>

<script>
export default {
name: "register",
  data(){
 return{
    email:'',
  pass:'',
  username:'',
   pass2:this.pass
 }
  },
  methods:{
  async submit() {
      const config = {
        headers: { "content-type": "application/json" }
      };

      try {
        let response = await this.$axios.$post("/rest-auth/registration/", {
          username:this.username,
          email:this.email,
          password1:this.pass,
          password2:this.pass2,
        }, config);
        console.log(response.toString())
        this.$router.push("/recipes/");
      } catch (e) {
        console.log(e.response);
      }
    }


 }
}
</script>

<style scoped>

</style>
