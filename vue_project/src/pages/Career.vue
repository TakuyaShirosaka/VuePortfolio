<template>
  <div class="tools-wrapper">
    <pageTitle title="Career"></pageTitle>
    <h3>※詳細は経歴書参照</h3>
    <div class="tools">
      <box v-bind:key="tool.name" v-for="tool in tools" v-bind:item="tool">担当 : {{tool.term}}</box>
    </div>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/careerBox'
import firebase from 'firebase'

export default {
  name: 'Career',
  title: 'Career',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      tools: []
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.push('/')
      } else {
        const uid = user.uid
        const db = firebase.database()
        const dbProfileRef = db.ref('Career/' + uid)
        dbProfileRef.on('value', snapshot => {
          snapshot.forEach((data) => {
            this.tools.push(
              { name: data.key, content: data.val().content, term: data.val().term }
            )
          })
        })
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.tools-wrapper {
  text-align: center;
}

.tools {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}
/* スマートフォン */
@media (max-width: 670px) {
  .tools {
    font-size: 12px;
  }
  h3 {
    font-size: 12px;
  }
}
</style>
