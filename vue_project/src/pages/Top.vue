<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="share">
      <h3>Share</h3>
      <div class="share-buttons">
        <a href="https://github.com/TakuyaShirosaka" target="_blank">
          <div class="button fa fa-github"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  title: ' ',
  data () {
    return {
      msg: '初めまして。\nここは城阪拓哉の\nPortfolio Siteです。\n普段使用する言語や\n業務経歴の紹介をします。'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
@import "@/assets/styles/_color.scss";

.hello {
  height: 100vh;
  position: relative;
  background: linear-gradient(to left, $main-color-1 0%, $main-color-2 100%);
  text-align: center;
}

h1 {
  white-space: pre-wrap;
  text-align: left;
  padding-top: 10vh;
  font-size: 50px;
  color: white;
  letter-spacing: 3px;
  font-weight: normal;
  border-bottom: 1px solid white;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0;
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}

h3 {
  color: white;
  font-weight: normal;
  font-size: 25px;
  margin-top: 200px;
}

.share {
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  display: block;
}

.button {
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 100px;
  display: inline-block;
  margin: 20px;
  margin-top: 0px;
  transition: all 0.3s;

  &:hover {
    background-color: darken(white, 10%);
  }
}

.fa {
  color: rgba(0, 0, 0, 0.4);
  font-size: 40px;
  line-height: 100px;
}

/* スマートフォン */
@media (max-width: 670px) {
  .hello {
    height: 200vh;
    background: linear-gradient(
      to bottom,
      $main-color-1 0%,
      $main-color-2 100%
    );
  }
  .share {
    position: relative;
  }
  h1 {
    padding-top: 10vh;
    font-size: 12px;
  }
  h3 {
    margin-top: 100px;
    margin-bottom: 10px;
  }
  .button {
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
  .fa {
    line-height: 70px;
  }
}
</style>
