<template>
  <v-container fill-height fluid>
    <div class="header">
      <h3 class="headline" v-if="title">{{title}}</h3>
      <h4 class="caption white--text" v-if="titleSub">{{titleSub}}</h4>
    </div>
    <div class="contents">
      <strong class="strong white--text" v-html="article" v-if="article"></strong>
      <ul class="contents-group">
        <li>
          <img class="package-atto" src="../assets/images/package_atto.png" />
        </li>
        <!--<li><img class="package-atto" src="../assets/images/package_n-studio.png"></li>-->
      </ul>
      <!-- <v-btn color="dark" to="/service/product">제품보기</v-btn> -->
    </div>
  </v-container>
</template>

<script>
// import store from '../store'
export default {
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      title: '주로 하는일',
      titleSub: '솔루션 판매와 프로그램 제작',
      article: '소중한<br>당신의<br><em>시간을</em> 아껴줄<br>거에요',
      list: [{ title: 'ATTO', src: '' }]
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  flex: 0 1 auto;
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    height: auto;
  }
}
strong {
  margin-top: 24px;
  align-self: flex-start;
  flex: 1 1 auto;
}
.headline {
  color: #fff;
}
.package-atto {
  width: 280px;
  height: auto;
  padding: 0;
}
.contents {
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  align-items: center !important;
}

@media (max-width: 750px) {
  strong {
    margin-top: 0px;
  }
  ul {
    margin-top: 0;
  }
  /*.contents {
    flex-direction: column !important;
    align-items: center !important;
  }*/
}
</style>
