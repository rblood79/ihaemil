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
          <v-container fluid v-if="$store.state.isMobile">
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
                  <h5 class="caption" v-text="item.titleSub" v-if="item.titleSub"></h5>
                </v-card-title>
                <v-img
                  :src="item.src"
                  v-bind:lazy-src="item.src"
                  aspect-ratio="1"
                  :height="item.height"
                  v-if="item.src"
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
import store from '../store'
export default {
  // props: ["name"],
  components: {},
  /* props: {
    id: String,
    title: String,
    titleSub: String,
    article: String,
    tag: String,
    src: String,
    path: String
  }, */
  data () {
    return {
      items: [
        {
          idx: 0,
          flex: [12, 12],
          title: '오늘도 열일',
          titleSub: '오늘도 고민중 점심메뉴',
          article: [
            {
              idx: 0,
              title: '백사장',
              titleSub: 'paeksc@ihaemil.com',
              article: '#자고일어나니사장, #java, #C, #linux, #server',
              src: require('../assets/images/peo-0.jpg'),
              height: 'auto',
              flex: [6, 6]
            },
            {
              idx: 1,
              title: '이사',
              titleSub: 'rblood79@gmail.com',
              article: '#사장이낚음, #vue, #react, #node',
              src: require('../assets/images/peo-1.jpg'),
              height: 'auto',
              flex: [6, 6]
            },
            {
              idx: 2,
              title: '이과장',
              titleSub: 'woni714@naver.com',
              article: '#세월아비켜라',
              src: require('../assets/images/peo-4.jpg'),
              height: 'auto',
              flex: [6, 6]
            },
            {
              idx: 3,
              title: '강과장',
              titleSub: 'dykang6@ihaemil.com',
              article: '#java, #사장님나빠요, #난누군가',
              src: require('../assets/images/peo-2.jpg'),
              height: 'auto',
              flex: [6, 6]
            },
            {
              idx: 4,
              title: '김대리',
              titleSub: 'denicola4@ihaemil.com',
              article: '#java, #배고픔, #면수, #X밥',
              src: require('../assets/images/peo-5.jpg'),
              height: 'auto',
              flex: [6, 6]
            },
            {
              idx: 5,
              title: '홍신입',
              article: 'java, #개구라',
              titleSub: 'myhong@ihaemil.com',
              src: require('../assets/images/peo-3.jpg'),
              height: 'auto',
              flex: [12, 6]
            }
          ],
          src: '', // require("../assets/images/isaac-smith-1182057-unsplash.jpg"),
          height: 'calc(100vh - 188px)'
        }
        /* {
          idx: 1,
          flex: [12, 12],
          title: "협력업체",
          titleSub: "dynamic web site build tool",
          article: [
            {
              idx: 7,
              title: "망고시스템즈",
              article:
                "클라우드서버 기반의 프로그램 설치 없이 쉽게 동적인 웹페이지 제작툴",
              src: "https://picsum.photos/320?random=45",
              height: 250,
              flex: [12, 6]
            }
          ],
          src: require("../assets/images/carl-heyerdahl-181868-unsplash.jpg"),
          height: 250
        },
        {
          idx: 3,
          flex: [12, 12],
          title: "주요고객",
          titleSub: "experience developer tool",
          article: [
            {
              idx: 7,
              title: "한국항공우주산업",
              article:
                "HTML5 + CSS3 + JAVASCRIPT + DB 기반의 E-Business Solution",
              src: "https://picsum.photos/320?random=50",
              height: 250,
              flex: [12, 6]
            }
          ],
          src: require("../assets/images/ux-store-1135537-unsplash.jpg"),
          height: 250
        } */
      ]
    }
  },
  mounted () {},
  methods: {}
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
    padding: 7px 16px;
  }
  .v-card__title {
    padding: 0;
    h4.headline {
      display: flex;
      align-items: center;
      font-family: "Noto Sans Medium", sans-serif !important;
      font-size: 18px !important;
      letter-spacing: -1.4px !important;
      font-weight: normal !important;
      padding: 7px 16px;
      width: 100%;
      height: 36px;

      background-color: #363636;
      color: #03a9f4 !important;
      caret-color: #03a9f4 !important;
    }
    h5.caption {
      text-decoration: underline;
      text-underline-position: under;
      margin-bottom: 0px;
      min-height: 36px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      align-items: center;
      padding: 7px 16px;
      width: 100%;
    }
  }
}
@media (max-width: 750px) {
  .v-card__title {
    h4.headline {
      background-color: transparent !important;
    }
    h5.caption {
      background-color: transparent !important;
      color: #363636 !important;
    }
  }
}
</style>
