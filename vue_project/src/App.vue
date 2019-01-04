<template>
  <div id="app">
    <div id="signin" v-if="login == 'false'">
      <h2>Sign In</h2>
      <p>
        <input type="text" placeholder="Email" v-model="email">
      </p>
      <p>
        <input type="password" placeholder="Password" v-model="password">
      </p>
      <button @click="signIn">Sign In</button>
    </div>
    <div id="content" v-if="login == 'true'">
      <div id="SideBar">
        <mySideBar></mySideBar>
      </div>
      <div id="main">
        <transition name="page-fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import mySideBar from './components/mySideBar'
import firebase from 'firebase'
import WebFont from 'webfontloader'

WebFont.load({
  custom: {
    families: ['Noto Sans Japanese'],
    urls: ['https://fonts.googleapis.com/earlyaccess/notosansjapanese.css']
  },
  loading: function () {
    console.log('loading')
  },
  active: function () {
    console.log('active')
  },
  inactive: function () {
    console.log('inactive')
  },
  fontloading: function (familyName, fvd) {
    console.log('fontloading', familyName, fvd)
  },
  fontactive: function (familyName, fvd) {
    console.log('fontactive', familyName, fvd)
  },
  fontinactive: function (familyName, fvd) {
    console.log('fontinactive', familyName, fvd)
  }
})

export default {
  name: 'App',
  components: {
    mySideBar
  },
  data () {
    return {
      email: '',
      password: '',
      login: 'false'
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('User is signed in.')
        this.login = 'true'
      } else {
        console.log('User is none.')
        this.login = 'false'
      }
    })
  },
  methods: {
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(e => {
        console.log(e)
        this.$router.push('/top')
        this.login = 'true'
      }).catch((error) => {
        var errorMessage = error.message
        console.log('エラーメッセージ', errorMessage)
        alert(errorMessage)
        this.$router.push('/')
        this.login = 'false'
      })
    }
  },
  watch: {
    login: function () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          this.login = 'true'
        } else {
          // No user is signed in.
          this.$router.push('/')
          this.login = 'false'
        }
      })
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/styles/_color.scss";
@import "@/assets/styles/_mixin.scss";

.html {
  overflow-x: hidden;
}
#app {
  font-family: "Noto Sans Japanese";
}

#app #signin {
  text-align: center;
  float: center;
}

body {
  margin: 0px;
}

input {
  width: 20%;
}

#main {
  float: center;
  padding-top: 0px;
  padding-left: 180px;
}

#SideBar {
  transition: width 0.28s;
  width: 180px !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
}

/* スマートフォン */
@media (max-width: 670px) {
  #main {
    width: 80% !important;
    padding-left: 20%;
  }

  #SideBar {
    width: 20% !important;
  }
}
</style>
