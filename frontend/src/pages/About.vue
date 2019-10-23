<template>
  <v-container fill-height fluid>
    <div class="header">
      <h3 class="headline" v-if="title">{{title}}</h3>
      <h4 class="caption white--text" v-if="titleSub">{{titleSub}}</h4>
    </div>
    <div class="contents">
      <ul v-if="list">
        <li v-for="item in list" :key="item.idx">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <v-spacer v-else></v-spacer>
      <strong class="strong white--text" v-html="article" v-if="article"></strong>
    </div>
  </v-container>
</template>

<script>
// import store from '../store'
export default {
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      title: '잘하는 것',
      titleSub: 'Easy From design to operation',
      article:
        '이놀라운<br>기술들로 <em>만족시킬 준비가</em><br>되었다는 사실',
      list: [
        { title: 'JAVA', src: '' },
        { title: 'JSP', src: '' },
        { title: 'C', src: '' },
        { title: 'ORACLE', src: '' },
        { title: 'SQL', src: '' },
        { title: 'HTML5', src: '' },
        { title: 'CSS3', src: '' },
        { title: 'JAVASCRIPT', src: '' },
        { title: 'NODEJS', src: '' },
        { title: 'REACT', src: '' },
        { title: 'REACT-NATIVE', src: '' },
        { title: 'VUE', src: '' },
        { title: 'FIREBASE', src: '' },
        { title: 'AMP', src: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  margin-bottom: 24px;
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    /*font-family: "Noto Sans Medium";*/
    color: #fff !important;
    padding: 4px 4px 4px 0;

    &::after {
      content: "+";
      width: 22px;
      display: inline-block;
      font-family: "Noto Sans DemiLight";
      text-align: center;
      color: rgba(0, 0, 0, 0.7);
    }

    &:last-child {
      &::after {
        content: "";
        width: 0;
      }
    }
  }
}
.headline {
  color: #fff;
}

@media (max-width: 750px) {
  ul {
    margin-top: 0;
    li {
      &:after {
        content: "";
        width: 0px;
      }
    }
    li:nth-child(even) {
      padding-right: 16px;
    }
  }
}
</style>
