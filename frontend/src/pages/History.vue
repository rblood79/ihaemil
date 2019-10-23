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
          ></v-img>
          <p class="article" v-text="item.article" v-if="item.article"></p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // props: ["name"],
  components: {},
  data () {
    return {
      items: [
        {
          idx: 0,
          flex: [12, 12],
          title: '걸어온 길',
          titleSub: 'do the best way',
          article:
            '2013년 추운 어느 겨울... 좋은 회사 찾아 헤메이는 한남자가 있었다 그는 여러 회사를 가봤지만 포기하고, 경남 진주에 뿌리 내리고 한국항공우주산업을 주거래처로 엔진관리시스템 개발/운영을 시작으로 현재까지 공군/해군에 까지 손을 뻗치고 있고 RUNA Report라고 보고서제작 솔루션도 제작판매 하고 현재 웹제작 플랫폼 RUNA Builder도 만들고 있다.',
          src: require('../assets/images/daniel-cheung-554578-unsplash.jpg'),
          height: 320
        }
        /* {
          idx: 1,
          flex: [12, 6],
          color: 'black',
          year: '2018',
          month: '05',
          title: '시스템 관리 / 운영',
          subTitle: 'UI Engineering, Pabna, USA',
          article: [
            '공군 T-50 EMUTS 시스템 유지보수',
            '해외수출기 EMUTS 시스템 유지보수',
            'KLIS 시스템 유지보수'
          ]
        },
        {
          idx: 2,
          flex: [12, 6],
          color: 'green',
          year: '2017',
          month: '07',
          title: '시스템 개발 / 운영',
          subTitle: 'UI Engineering, Pabna, USA',
          article: [
            '수리온 RAM 활용분석 SW 유지보수',
            '상륙기동헬기 RAM 활용분석 SW 개발',
            'KLIS 시스템 유지보수'
          ]
        },
        {
          idx: 3,
          flex: [12, 6],
          color: 'pink',
          year: '2016',
          month: '01',
          title: '시스템 관리 / 운영',
          subTitle: 'UI Engineering, Pabna, USA',
          article: ['IEMMS 시스템 유지보수', 'KLIS 시스템 유지보수']
        },
        {
          idx: 4,
          flex: [12, 6],
          color: 'amber',
          year: '2015',
          month: '08',
          title: '시스템 개발 / 운영',
          subTitle: 'UI Engineering, Pabna, USA',
          article: [
            '수리온 RAM 활용분석 S/W 개발',
            'IEMMS 시스템 유지보수',
            'KLIS 시스템 유지보수'
          ]
        },
        {
          idx: 5,
          flex: [12, 6],
          color: 'orange',
          year: '2014',
          month: '12',
          title: '시스템 관리 / 운영',
          subTitle: 'UI Engineering, Pabna, USA',
          article: [
            'IEMMS 시스템 WEB 전환',
            'IEMMS 시스템 유지보수',
            'KLIS 시스템 유지보수'
          ]
        },
        {
          idx: 6,
          flex: [12, 6],
          color: 'orange',
          year: '2013',
          month: '12',
          title: '회사창립',
          subTitle: 'UI Engineering, Pabna, USA',
          article: [
            'KLIS 시스템 유지보수',
            'FA50 PBL 물류체계시스템 RTV 부분 개발'
          ]
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
    font-size: 1.5em !important;
    letter-spacing: -1.4px !important;
    font-weight: normal !important;
    padding: 7px 16px;
  }
  .v-card {
    .container {
      max-width: 100% !important;
    }
  }
}
</style>
