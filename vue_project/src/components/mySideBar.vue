<template>
  <div id="sideWrap">
    <div class="link">
      <router-link to="/">Top</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/languages">Languages</router-link>
      <router-link to="/frameworks">Frameworks</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySideBar',
  data () {
    return {}
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
  padding: 20px;
  position: fixed;
  background: linear-gradient(to left, $side-color-1 0%, $side-color-2 100%);
  height: 100%;
}

a {
  height: 7vh;
  line-height: 7vh;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  color: black;
  text-decoration: none;
  width: 150px;
  display: inline-block;
  text-shadow: 0px 0px 30px rgba(226, 200, 200, 0.945);

  &:hover {
    background-color: darken(white, 5%);
  }
}

.clear {
  clear: left;
}
/* タブレット */
@media (max-width: 1000px) {
  a {
    width: 30%;
    height: 60px;
    line-height: 60px;
  }
}

/* スマートフォン */
@media (max-width: 670px) {
  a {
    width: 40%;
    height: 35px;
    line-height: 35px;
  }
}
</style>
