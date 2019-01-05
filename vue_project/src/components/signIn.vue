<template>
  <div class="signin">
    <h2>Sign In</h2>
    <p>
      <input type="text" placeholder="Email" v-model="email">
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password">
    </p>
    <button @click="signIn">Sign In</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(e => {
          console.log(e)
          this.$router.push('/top')
        })
        .catch(error => {
          var errorMessage = error.message
          console.log('エラーメッセージ', errorMessage)
          alert(errorMessage)
          this.$router.push('/')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
.signin {
  text-align: center;
  float: center;
}
</style>
