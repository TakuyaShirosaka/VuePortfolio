<template>
  <div class="box">
    <h2>{{item.name}}</h2>
    <p class="box-content">{{item.content}}</p>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: ['item'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_color.scss";
@import "@/assets/styles/_mixin.scss";

.box {
  @include box-shadow;
  @include box(500px, 250px);
  padding: 5px;
}

@media (max-width: 1000px) {
  .box {
    @include box-smartphone(260px, 300px);
  }
}

h2 {
  @include box-title;
}

.box-content {
  @include box-content;
  white-space: pre-wrap;
  display: inline-block;
}

.sub-content {
  @include box-sub-content;
}

@media (max-width: 670px) {
  .box {
    @include box-smartphone(260px, 320px);
  }
}
</style>
