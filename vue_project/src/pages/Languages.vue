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

export default {
  name: 'Languages',
  title: 'Languages -',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      languages: [
        {
          name: 'Java',
          content:
            'これまでの業務の中では一番使用頻度の高い言語です。\nバージョンはJava6～8を使用しました。\nDBはOracleだったりそうでなかったりします。'
        },
        {
          name: 'VisualBasic(.Net、6.0)',
          content:
            'デスクトップアプリやハンディのアプリの開発で使用しました。\n開発用のツールはVBAで書いたりもします。'
        },
        {
          name: 'Kotlin',
          content:
            '個人でJavaの代わりに使用を始めました。(KotlinMessangerで使用)\n主にAndroidやFirebase、AWS Lambdaで使用しています。\nOracleからAdoptOpenJDKに切り替え中です。'
        },
        {
          name: 'HTML & SCSS',
          content:
            '業務でMockを作成するのに使用したり、\n本サイトを作成するにあたり使用しています。'
        },
        {
          name: 'JavaScript',
          content:
            '業務では生JavaScriptやJQuery、\n個人ではVue.js(このサイトの作成で使用)・GAS・React.jsなどをメインに使用しました。'
        },
        {
          name: 'Golang',
          content:
            'こちらは業務経験もなく、\n個人でも何か形のあるものはありませんが\n勉強会の場で知ってから独学を続けております。'
        },
        {
          name: 'AWS',
          content:
            '業務ではなく個人で使用、S3・Cognito・ApiGateWay・Lambda・DynamoDBの使用経験があります。'
        },
        {
          name: 'COBOL',
          content:
            '同年代ではあまり開発経験のある人はいません。\nそういう意味では貴重な経験を持っています。'
        },
        {
          name: 'Japanese',
          content:
            '一番なじみが深い言語です。この言語に関してはビジネスレベルであるといっても過言ではありません。'
        }
      ]
    }
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
    font-size: 15px;
  }
}
</style>
