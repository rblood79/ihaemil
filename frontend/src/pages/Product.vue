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
            v-bind:style="{ backgroundColor: item.background}"
            contain
          ></v-img>
          <!--<v-card-text v-text="item.article"></v-card-text>-->

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
                  v-bind:style="{ backgroundColor: item.background}"
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
  data() {
    return {
      items: [
        {
          idx: 0,
          flex: [12, 12],
          title: "RUNA report",
          titleSub:
            "최적의 사용자 편의성을 지원하는 레포트 개발환경(Form Editor)",
          article: [
            {
              idx: 1,
              title: "어디에서나 한결같이", // 'Cross Flatform',
              article:
                "HTML5를 지원하는 브라우저(IE, Opera, Firefox, Chrome, Safari 등)에서 동일한 서비스가 가능합니다.",
              background: "#fff",
              src: require("../assets/images/browser.png"),
              height: "240",
              flex: [12, 12]
            },
            {
              idx: 3,
              title: "누구나 쉽게", // 'Easy Builder',
              article:
                "Excel 형태의 레이아웃 구성으로 익숙한 환경에서 보다쉽게 적응하며 누구나 편리하게 제작이 가능합니다.",
              src: require("../assets/images/jordan-sanchez-Vbzx-yy5FoA-unsplash.jpg"),
              height: "auto",
              flex: [6, 6]
            },
            {
              idx: 2,
              title: "내 마음대로", // 'Customizable',
              article:
                "차트형태 변경이나 뷰어의 페이징 방법 및 라벨프린터 사용 시 인쇄용지에 맞게 라벨 갯수 변경이 가능하여 유동적으로 보여줄 수 있습니다.",
              src: require("../assets/images/campaign-creators-pypeCEaJeZY-unsplash.jpg"),
              height: "auto",
              flex: [6, 6]
            },
            {
              idx: 6,
              title: "좀 더 다양하게", // 'App Component',
              article:
                "다양한 종류의 컴퍼넌트(테이블, 차트, 바코드, QR CODE, 라벨 등)을 지원하며 새로운 새로운 컨텐츠를 추가 및 편집할 수 있습니다.",
              src: require("../assets/images/harpal-singh-_zKxPsGOGKg-unsplash.jpg"),
              height: "auto",
              flex: [12, 6]
            },
            {
              idx: 5,
              title: "한번에 하자", // 'Multi Page',
              article:
                "Powerpoint의 페이지 기능처럼 여러 페이지에 각각의 데이터와 화면 구성으로 한번에 다양한 페이지의 보고서를 제작할 수 있습니다.",
              src: require("../assets/images/water-journal--EvvsegVoUE-unsplash.jpg"),
              height: "auto",
              flex: [12, 6]
            },
            {
              idx: 4,
              title: "설치 프로그램은 그만", // 'Cloud Service',
              article:
                "제작 프로그램을 설치할 필요없이 다양한 웹브라우저에서 서비스가 가능하여 쉽고 편리하게 이용할 수 있습니다.",
              src: require("../assets/images/alina-grubnyak-hdpDLIXZg7Y-unsplash.jpg"),
              // height: "auto",
              flex: [6, 6]
            },
            {
              idx: 7,
              title: "동적으로", // 'Dataset Connect',
              article:
                "보고서에 여러개의 데이터셋을 사용가능하며 DB에서 가져온 데이터 및 Excel 파일 업로드를 통해 가공없이 사용할 수 있습니다.",
              src: require("../assets/images/jeremy-thomas-rMmibFe4czY-unsplash.jpg"),
              height: "auto",
              flex: [6, 6]
            }
            /* {
              idx: 0,
              title: 'Non-ActiveX',
              article:
                'ATTO는 ActiveX의 설치나 사용 없이 웹표준 HTML5를 사용하여 빠른 속도로 보고서를 보여줍니다.',
              background: '',
              src: require('../assets/images/activex.png'),
              height: 240,
              flex: [12, 6]
            } */
          ],
          background: "#0277bd",
          // src: require('../assets/images/olav-ahrens-rotne-1102458-unsplash.jpg'),
          src: require("../assets/images/package_atto.png"),
          height: "calc(100vh - 188px)"
        },
        {
          idx: 1,
          flex: [12, 12],
          title: "RUNA Home Builder",
          titleSub: "dynamic web site build tool",
          article: [
            {
              idx: 7,
              title: "5분내에 홈페이지를 만들어보자",
              article:
                "클라우드서버 기반의 설치 없이 웹에서 쉽게 사용 할수있는툴 - 준비중",
              src: "", // require("../assets/images/ciprian-boiciuc-193062-unsplash.jpg"),
              height: "auto",
              flex: [12, 12]
            }
          ],
          background: "#27d1a6",
          src: require("../assets/images/package_c-builder.png"),
          height: "calc(100vh - 188px)"
        },
        {
          idx: 3,
          flex: [12, 12],
          title: "RUNA UI/UX Studio",
          titleSub: "experience developer tool",
          article: [
            {
              idx: 7,
              title: "멀티 플랫폼 제작 도구",
              article:
                "HTML5 + CSS3 + JAVASCRIPT + DB 기반의 E-Business Solution",
              src: "", // require("../assets/images/ciprian-boiciuc-193062-unsplash.jpg"),
              height: "auto",
              flex: [12, 12]
            }
          ],
          background: "#673ab7",
          src: require("../assets/images/package_n-studio.png"),
          height: "calc(100vh - 188px)"
        }
      ]
    };
  },
  created() {},
  mounted() {
    
  },
  methods: {}
};
</script>
<style lang="scss" scoped>

.container {
  padding: 0;
  /*min-height: auto !important;*/
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
