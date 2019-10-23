<template>
  <v-container fluid>
    <div class="header">
      <h2 class="headline-mobile headline secondary--text" v-if="title">{{title}}</h2>
      <h3 class="caption white--text" v-if="titleSub">{{titleSub}}</h3>
    </div>

    <v-text-field class="search" v-model="search" label="검색" required></v-text-field>

    <v-expansion-panel class="expansion">
      <v-expansion-panel-content v-for="(item, index) in items" :key="index">
        <template v-slot:header>
          <div v-html="item.question">question</div>
        </template>
        <v-card>
          <v-card-text class="grey lighten-4" v-html="item.answer">answer</v-card-text>
          <v-img :src="item.image" :lazy-src="item.image" aspect-ratio="1.7" class="grey lighten-5"></v-img>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>
<script>
import route from '../router'
export default {
  // props: ["name"],
  components: {},
  data () {
    return {
      title: '자주하는 질문',
      titleSub: '같은거 물어보지마',
      search: '',

      itemList: [
        {
          question: '인쇄가 안되요',
          answer:
            '1. 프린터연결이 되었는지 확인하세요<br>2. 윈도우10 이하는 adobe acrobat reader가 설치 되어있는지 확인하세요',
          image: 'https://vuejs.org//images/logo.png',
          show: false
        },
        {
          question: '화면이 안보일때',
          answer:
            '새로고침(F5)를 해보세요, 인터넷이 연결 되어있는지 확인하세요',
          image:
            'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
        },
        {
          question: '저장이 안되요',
          answer: 'aaaaaaaaaa',
          image: 'https://angularjs.org/img/ng-logo.png'
        },
        {
          question: '이미지가 안보여요',
          answer: 'eeeeeeeeee',
          image:
            'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
        },
        {
          question: '인쇄시 화면이 짤릴때',
          answer: '편집화면에서 여백을 조절 하세요',
          image:
            'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
        },
        {
          question: '라벨프린터 크기와 갯수를 변경하고 싶어요',
          answer: '인쇄 화면에서 조절',
          image: 'https://code-maven.com/img/node.png'
        }
      ]
    }
  },
  mounted () {
    // console.log("mounted:");
  },
  methods: {
    ini: function () {
      console.log()
    }
  },
  computed: {
    items () {
      return this.itemList.filter(item => {
        return item.question.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
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
      background-color: rgba(0, 0, 0, 0.8);
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
    padding: 10px 16px 16px 16px;
  }
  .v-card__title {
    padding: 0;
  }
  h4.headline {
    display: flex;
    align-items: center;
    font-family: "Noto Sans DemiLight", sans-serif !important;
    font-size: 18px !important;
    letter-spacing: -1.4px !important;
    font-weight: normal !important;
    padding: 16px;
    height: 48px;
    color: #03a9f4 !important;
  }
}
</style>
