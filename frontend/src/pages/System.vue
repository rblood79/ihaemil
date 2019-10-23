
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
          <v-card-title secondary-title>
            <h2
              class="headline-mobile headline secondary--text"
              v-text="item.title"
              v-if="item.title"
            >title</h2>
            <p class="caption grey--text" v-text="item.titleSub" v-if="item.titleSub"></p>
          </v-card-title>

          <v-img
            :src="item.src"
            v-bind:lazy-src="item.src"
            aspect-ratio="1"
            :height="item.height"
            v-if="item.src"
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
                  <h3 class="headline" v-text="item.title" v-if="item.title"></h3>
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
      // appName: "HAEMILSOFT",
      items: [
        {
          idx: 0,
          flex: [12, 12],
          title: '시스템 개발',
          titleSub: '당신을 조금 더 게으르게 할수 있는 환경을 만들어 드립니다.',
          article: [
            {
              idx: 0,
              title: '소프트웨어 개발',
              article: '고객의 업무 환경에 가장 적합한 맞춤형 솔루션 개발',
              src: 'https://picsum.photos/640?random=5', // require("../assets/images/ciprian-boiciuc-193062-unsplash.jpg"),
              height: 640,
              flex: [12, 6]
            },
            {
              idx: 1,
              title: 'IT 컨설팅',
              article:
                '최신 기술 트렌드에 따른 IT 서비스 컨설팅 및 업데이트 지원',
              src: 'https://picsum.photos/320?random=10', // require("../assets/images/ciprian-boiciuc-193062-unsplash.jpg"),
              height: 320,
              flex: [12, 6]
            },
            {
              idx: 2,
              title: 'S/W 통합관리',
              article: '고객사에 시스템에 가장 적합한 S/W설치 및 유지보수 제공',
              src: 'https://picsum.photos/320?random=15', // require("../assets/images/ciprian-boiciuc-193062-unsplash.jpg"),
              height: 320,
              flex: [12, 6]
            },
            {
              idx: 3,
              title: '시스템 운영 및 유지보수',
              article:
                '검증된 품질체계를 기반으로 안정적인 시스템 운영 및 유지보수 제공',
              src: 'https://picsum.photos/320?random=20', // require("../assets/images/ciprian-boiciuc-193062-unsplash.jpg"),
              height: 320,
              flex: [12, 6]
            }
          ],
          src: require('../assets/images/isaac-smith-1182057-unsplash.jpg'),
          height: 320
        }
      ]
    }
  },
  mounted () {},
  methods: {
    test: function () {
      // console.log()
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  & > .layout {
    & > .flex {
      margin-top: 32px;
      &:first-child {
        margin-top: 0;
      }
      & > .v-card {
        & > .v-card__title {
          background-color: #363636;
        }
      }
    }
  }
}
.v-card {
  .v-card__title {
    flex-direction: column;
    justify-content: flex-start;
    align-items: self-start;
    h2.headline {
      font-size: 32px !important;
      line-height: 48px !important;
    }
    h3.headline {
      font-family: "Noto Sans Light", sans-serif !important;
      font-size: 14px;
      color: #03a9f4;
    }
  }
  .article {
    font-family: "Noto Sans DemiLight", sans-serif !important;
    padding: 16px;
    color: #363636;
  }
}
@media (max-width: 750px) {
  .container {
    & > .layout {
      & > .flex {
        margin-top: 32px;
        &:first-child {
          margin-top: 0;
        }
        & > .v-card {
          & > .v-card__title {
            background-color: transparent;
            padding-bottom: 0;
            h2.headline {
              font-size: 1.571em !important;
            }
            & > p {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
