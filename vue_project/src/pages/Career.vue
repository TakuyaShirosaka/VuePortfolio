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

export default {
  name: 'Career',
  title: 'Career',
  components: {
    pageTitle,
    box
  },
  data () {
    return {
      tools: [
        {
          name: '医療機卸向け販売管理PKG拡販',
          content:
            '医療機械卸業者向けの販売管理PKGの拡販対応\n(カスタマイズなど)を行いました。',
          term: '基本設計・詳細設計'
        },
        {
          name: 'ECサイトサーバー移行',
          content:
            'EC-CUBE3.x系で作成されたECサイトのサーバー移行\n(さくらサーバー→XServer)を行いました。\n技術的にはApacheやPHP(sirex)、twigを扱いました。',
          term: '移行業務全般・エンドユーザーからのQA対応'
        },
        {
          name: '自社内ツール企画・開発対応',
          content:
            'VBAを使用したWBS作成ツールの開発、\n別件のPJの為の解析・技術選定\n(JQuery、またAngularJSのテンプレートを使用)',
          term: '要件定義・基本設計・製造'
        },
        {
          name: '生保WEBアプリ 新商品開発',
          content:
            '某大手生保会社向け業務システム開発、\n査定業務の新商品開発対応',
          term: '基本設計'
        },
        {
          name: '生保WEBアプリ 新元号対応',
          content:
            '某大手生保会社向け業務システム開発、\n元号改定に向けたシステム対応',
          term: '基本設計～運用試験'
        },
        {
          name: '生保WEBアプリリニューアル',
          content:
            '某大手生保会社向け業務システム開発、\nサーバーリプレースに伴うシステム側の非互換対応',
          term: '製造～結合試験'
        },
        {
          name: '社内研修',
          content:
            'Struts, Spring等のJavaフレームワーク\nについての研修を受講し、\n得た知識を業務に活用できるようになりました。',
          term: '特になし'
        },
        {
          name: '財務会計システムＰＫＧ開発',
          content:
            '財務会計システムPKGのバージョンアップ、ヘルプデスク対応',
          term: '基本設計～結合試験'
        },
        {
          name: '官公庁向け財務会計システムＰＫＧ開発',
          content:
            '官公庁に対する財務会計システムPKG新規導入案件',
          term: '基本設計～保守'
        },
        {
          name: '官公庁向け塾代助成システム開発',
          content:
            '官公庁に対する財務会計システムPKG新規導入案件',
          term: 'プログラム設計～結合試験'
        },
        {
          name: '官公庁向け介護システム 制度改正対応',
          content:
            '官公庁の介護システムに制度改正対応を行いました。',
          term: '製造～結合試験'
        },
        {
          name: '官公庁向け 総合福祉システム再構築',
          content:
            '官公庁の総合福祉システムのマイグレーション案件',
          term: 'プログラム設計～結合試験'
        }
      ]
    }
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
    font-size: 15px;
  }
}
</style>
