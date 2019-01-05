<template>
  <div class="languages-wrapper">
    <pageTitle title="Languages"></pageTitle>
    <h3>※下記以外でも使用できる言語はあります。</h3>
    <div class="languages">
      <box v-bind:key="language.name" v-for="language in languages" v-bind:item="language"></box>
    </div>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/careerBox'
import firebase from 'firebase'

export default {
  name: 'Languages',
  title: 'Languages -',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      languages: []
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.push('/')
      } else {
        const uid = user.uid
        const db = firebase.database()
        const dbProfileRef = db.ref('Languages/' + uid)
        dbProfileRef.on('value', snapshot => {
          snapshot.forEach((data) => {
            this.languages.push(
              { name: data.key, content: data.val().content }
            )
          })
        })
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.languages-wrapper {
  text-align: center;
}

.languages {
  max-width: 1200px;
  display: inline-block;
  font-size: 15px;
  white-space: pre-wrap;
}
/* スマートフォン */
@media (max-width: 670px) {
  .languages {
    font-size: 12px;
  }
  h3 {
    font-size: 12px;
  }
}
</style>
