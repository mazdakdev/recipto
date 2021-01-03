<template>

  <section class="section">

    <div class="container">

      <div class="columns">

        <div class="column is-4 is-offset-4">

          <h2 class="title has-text-centered">Register!</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="register">



            <div class="field">

              <label class="label">username</label>

              <div class="control">

                <input

                  type="text"

                  class="input"

                  name="email"

                  v-model="email"

                  required

                >

              </div>

            </div>

            <div class="field">

              <label class="label">Password</label>

              <div class="control">

                <input

                  type="password"

                  class="input"

                  name="password"

                  v-model="password"

                  required

                >

              </div>

            </div>

            <div class="control">

              <button type="submit" class="button is-dark is-fullwidth">Register</button>

            </div>

          </form>

          <div class="has-text-centered" style="margin-top: 20px">

            Already got an account? <nuxt-link to="/login">Login</nuxt-link>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script>



export default {



  data() {

    return {



      email: '',

      password: '',

      error: null

    }

  },
 middleware: 'guest',
  methods: {

    async register() {

      try {

        await this.$axios.post('/rest-auth/registration/', {

          username: this.email,



          password1: this.password,
          password2: this.password,



        })

        await this.$auth.loginWith('local', {

          data: {

            username: this.email,

            password: this.password

          },

        })

        this.$router.push('/')

      } catch (e) {

        this.error = e.response.data.message
        console.log(this.error )
        console.log(e.response)

      }

    }

  }

}

</script>
