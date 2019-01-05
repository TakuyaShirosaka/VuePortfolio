<template>
  <div class="works-wrapper">
    <pageTitle title="Works"></pageTitle>
    <div class="works">
      <box v-bind:key="work.link" v-for="work in works" v-bind:item="work">
        <p>
          <img v-bind:src="work.image">
        </p>
        <p>
          <a v-bind:href="work.link" target="_blank">URL</a>
        </p>
      </box>
    </div>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import box from '@/components/box'
import firebase from 'firebase'

export default {
  name: 'Works',
  title: 'Works -',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      works: []
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.push('/')
      } else {
        const uid = user.uid
        const db = firebase.database()
        const dbProfileRef = db.ref('Works/' + uid)
        dbProfileRef.on('value', snapshot => {
          snapshot.forEach((data) => {
            this.works.push(
              { name: data.key, content: data.val().content, link: data.val().link, image: data.val().image }
            )
          })
        })
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.works-wrapper {
  text-align: center;
}

.works {
  max-width: 1200px;
  margin: 0;
  display: inline-block;
}

a {
  text-decoration: none;
}
/* スマートフォン */
@media (max-width: 670px) {
  .works {
    font-size: 12px;
  }
}
</style>
