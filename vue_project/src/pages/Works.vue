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

export default {
  name: 'Works',
  title: 'Works -',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      works: [
        {
          name: 'KotlinMessenger',
          content:
            'Androidで動作する簡易チャットアプリです。\nKotlinとFireBaseの認証機能、データベース、ストレージ機能を使用して作られています。\n※アプリの性質上、個人情報を含むためアプリそのものの公開は行っていません。',
          link: 'https://github.com/TakuyaShirosaka/KotlinMessanger',
          image: require('../assets/KotlinMessanger.png')
        },
        {
          name: 'Portfolio Site',
          content:
            '本サイトです。\n今まで自分自身のアウトプットが経歴書しか無かったため、独学や他の人の作品を参考に作成しました。Vue.jsを使用しています。',
          link: 'https://takuyashirosaka.github.io/VuePortfolio/index.html',
          image: require('../assets/top.png')
        },
        {
          name: 'AutoWriting',
          content:
            'ChromeのwebkitSpeechRecognitionという機能を使用して自動音声文字起こしを行うアプリです。\n自動で起こされた文字列は行単位で編集可能です。\nこちらもVue.jsを使用しています。',
          link: 'https://takuyashirosaka.github.io/Vue/AutoWriting/index.html#/',
          image: require('../assets/AutoWriting.png')
        },
        {
          name: 'メール一括送信',
          content:
            '同僚のために作成したメール一括送信ツールです。\nGmailが使える方であれば使用できます。\nスプレッドシートごとコピーして記載の手順に従えば使用できます。\nフロントはスプレッドシート、ロジックはGASを使用しています。メールの一括送信の他、事前チェックとしてのプレビュー・下書き作成も行えます。',
          link: 'https://docs.google.com/spreadsheets/d/1H4b9mg-FJz6Mi8sc3QRh7QYr8OW0ln6C4r6qyc8FJ2w/edit#gid=1831901609',
          image: require('../assets/SendMail.png')
        },
        {
          name: 'KotlinLambda',
          content:
            'AWS Lambdaでの使用を想定したKotlinプロジェクト',
          link: 'https://github.com/TakuyaShirosaka/KotlinLambda',
          image: ''
        }
      ]
    }
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
