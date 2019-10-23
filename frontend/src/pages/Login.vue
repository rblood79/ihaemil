<template>
  <v-container fluid>
    <div class="header">
      <h2 class="headline-mobile headline secondary--text">{{title}}</h2>
      <h3 class="caption white--text">{{titleSub}}</h3>
    </div>
    <div class="contents">
      <button class="v-btn v-btn--depressed v-btn--router theme--light accent">Sign in</button><button class="v-btn v-btn--depressed v-btn--router theme--light accent">Sign out</button>
    </div>
  </v-container>
</template>

<script>
/* import axios from 'axios' */
import store from '../store'

export default {
  name: 'HelloWorld',
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      title: '로그인',
      titleSub: 'Easy From design to operation',
      article: ''
    }
  }
  /* created() {
    axios.get('http://localhost:8080/home')
      .then(result => this.greeting = result.data.greeting)
  } */
}
</script>
<style lang="scss" scoped>
.container {
  flex-direction: column;
  padding: 0;
  .header {
    .headline {
      background-color: #363636;
      align-items: center;
      padding: 0 16px;
      color: #03a9f4 !important;
      caret-color: #03a9f4 !important;

      height: 48px;
      display: flex;
      align-items: center;
      font-family: "Noto Sans Medium", sans-serif !important;
      font-size: 1.5em !important;
      letter-spacing: -1.4px !important;
      font-weight: normal !important;
    }
    .caption {
      text-decoration: underline;
      text-underline-position: under;
      margin-bottom: 0px;
      min-height: 36px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      align-items: center;
      padding: 7px 16px;
    }
  }
  .article {
    font-family: "Noto Sans DemiLight", sans-serif !important;
    font-size: 16px !important;
    letter-spacing: -1.4px !important;
    font-weight: normal !important;
    padding: 7px 16px;
  }
  .v-card__title {
    padding: 0;
  }
  h4.headline {
    display: flex;
    align-items: center;
    font-family: "Noto Sans Medium", sans-serif !important;
    font-size: 18px !important;
    letter-spacing: -1.4px !important;
    font-weight: normal !important;
    padding: 7px 16px;
    height: 36px;
  }
}
</style>
