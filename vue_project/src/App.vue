<template>
  <div id="app">
    <div id="SideBar">
      <mySideBar></mySideBar>
    </div>
    <div id="main">
      <transition name="page-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import mySideBar from './components/mySideBar'
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
    myHeader,
    mySideBar
  }
}
</script>

<style lang='scss'>
@import "@/assets/styles/_color.scss";

#app {
  font-family: "Noto Sans Japanese";
}

body {
  margin: 0px;
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
</style>
