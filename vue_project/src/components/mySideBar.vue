<template>
  <div id="sideWrap">
    <div class="link">
      <router-link to="/top">Top</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/languages">Languages</router-link>
      <router-link to="/career">Career</router-link>
      <router-link to="/works">Works</router-link>
      <a @click="signOut()">Sign Out</a>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {}
  },
  methods: {
    signOut () {
      firebase.auth().signOut().then(function () {
        console.log('Signed out.')
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/styles/_color.scss";

#sideWrap {
  float: left;
  text-align: left;
  align-items: center;
  justify-content: center;
  width: 140px;
  padding: 25px;
  position: fixed;
  background: linear-gradient(to left, $side-color-1 0%, $side-color-2 100%);
  height: 100%;
}
.link {
  display: block;
}
a {
  height: 7vh;
  line-height: 7vh;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 25px;
  color: black;
  text-decoration: none;
  width: 150px;
  display: block;
  text-shadow: 0px 0px 30px rgba(226, 200, 200, 0.945);

  &:hover {
    border-radius: 20px;
    background-color: darken(white, 5%);
  }
}

.clear {
  clear: left;
}

/* スマートフォン */
@media (max-width: 670px) {
  a {
    width: 70px;
    font-size: 13px;
    line-height: 35px;
    padding: 5px;
  }
  #sideWrap {
    width: 80px;
    padding: 5px;
  }
}
</style>
