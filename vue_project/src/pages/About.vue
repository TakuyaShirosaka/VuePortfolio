<template>
  <div class="about-wrapper">
    <pageTitle title="About"></pageTitle>
    <div class="self-introduction">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>城阪 拓哉 (Takuya Shirosaka)</td>
          </tr>
          <tr>
            <th>University</th>
            <td>京都産業大学 法学部卒</td>
          </tr>
          <tr>
            <th>Birthday</th>
            <td v-bind:value="age">1991/9/21 ({{age}})才</td>
          </tr>
          <tr>
            <th>最寄り駅</th>
            <td>JR環状線 京橋駅</td>
          </tr>
          <tr>
            <th>GitHub</th>
            <td>
              <a href="https://github.com/TakuyaShirosaka" target="_blank">Takuya.Shirosaka</a>
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>職務経歴書/職務経歴書に記載</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'

const yourBirthDay = {
  year: 1991,
  month: 9,
  date: 21
}

export default {
  name: 'About',
  title: 'About - ',
  components: {
    pageTitle
  },
  data () {
    return {
      age: 25
    }
  },
  beforeMount () {
    // 今日の日付
    const today = new Date()
    const y1 = today.getFullYear().toString().padStart(4, '0')
    const m1 = (today.getMonth() + 1).toString().padStart(2, '0')
    const d1 = today.getDate().toString().padStart(2, '0')

    // 自分の誕生日
    const birthDate = new Date(yourBirthDay.year, yourBirthDay.month - 1, yourBirthDay.date)
    const y2 = birthDate.getFullYear().toString().padStart(4, '0')
    const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0')
    const d2 = birthDate.getDate().toString().padStart(2, '0')

    // 引き算
    const calcAge = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000)
    this.age = calcAge
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_color.scss";
@import "@/assets/styles/_mixin.scss";

.about-wrapper {
  text-align: center;
}

.self-introduction {
  @include box-shadow;
  width: 800px;
  border-radius: 50px;
  margin: 20px auto;
  color: $text-color;
}

table {
  padding: 50px 0;
  display: inline-block;
  text-align: left;
}

th {
  padding-right: 20px;
  font-weight: normal;
}

td {
  font-size: 20px;
  padding: 5px;
}

a {
  text-decoration: none;
}

/*スマートフォン*/
@media (max-width: 670px) {
  .self-introduction {
    @include box-smartphone(260px, 500px);
  }

  th {
    display: block;
  }

  td {
    display: block;
    font-size: 15px;
  }
}
</style>
