<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex
        d-flex
        v-for="item in items"
        :key="item.idx"
        v-bind="{ [`xs${item.flex[0]} sm${item.flex[1]}`]: true }"
      >
        <v-card flat>
          <v-container fluid>
            <div class="header">
              <h2
                class="headline-mobile headline secondary--text"
                v-text="item.title"
                v-if="item.title"
              ></h2>
              <h3 class="caption white--text" v-text="item.titleSub" v-if="item.titleSub"></h3>
            </div>
          </v-container>

          <v-img
            :src="item.src"
            v-bind:lazy-src="item.src"
            aspect-ratio="1"
            :height="item.height"
            v-if="item.src"
            v-bind:style="{ background: item.background }"
          ></v-img>

          <v-layout row wrap v-if="item.article">
            <v-flex
              d-flex
              v-for="item in item.article"
              :key="item.idx"
              v-bind="{ [`xs${item.flex[0]} sm${item.flex[1]}`]: true }"
            >
              <v-card flat>
                <v-card-title secondary-title>
                  <h4 class="headline" v-text="item.title" v-if="item.title"></h4>
                </v-card-title>
                <v-img
                  :src="item.src"
                  v-bind:lazy-src="item.src"
                  aspect-ratio="1"
                  :height="item.height"
                  v-if="item.src"
                  v-bind:style="{ background: item.background }"
                  contain
                ></v-img>
                <p class="article" v-text="item.article" v-if="item.article"></p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import route from '../router'
export default {
  // props: ["name"],
  components: {},
  props: {
    id: String,
    title: String,
    titleSub: String,
    article: String,
    tag: String,
    src: String,
    path: String
  },
  data () {
    return {
      items: [
        {
          idx: 0,
          flex: [12, 12],
          title: '어플리케이션',
          titleSub: '당신이 원하는 모든 종류의 프로그램을 만들어 드립니다',
          article: [
            {
              idx: 0,
              title: '웹프로그램',
              article: '인터넷 환경에 가장 적합한 맞춤형 솔루션 개발',
              src: require('../assets/images/marek-levak-GNVxujZ_CxU-unsplash.jpg'),
              height: 'auto',
              flex: [12, 6]
            },
            {
              idx: 1,
              title: '모바일 앱',
              article:
                '안드로이드/아이폰용 Application 최신 기술 트렌드에 따른 IT 서비스 컨설팅 및 업데이트 지원',
              src: require('../assets/images/christiann-koepke-XersifI0JCk-unsplash.jpg'),
              height: 'auto',
              flex: [6, 6]
            },
            {
              idx: 3,
              title: '데스크탑용 APP',
              article:
                '인터넷이 없는 환경에서도 PC에 설치하여 사용가능한 프로그램',
              src: require('../assets/images/austin-distel-Imc-IoZDMXc-unsplash.jpg'),
              height: 'auto',
              flex: [6, 6]
            }
          ],
          src: '', // require('../assets/images/new-data-services-Ar-iTL4QKl4-unsplash.jpg'),
          height: 'calc(100vh - 188px)'
        }
      ]
    }
  },
  mounted () {
    console.log('props:', this.props)
  },
  methods: {
    test: function () {
      // console.log()
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
