<template>
  <v-container fluid class="notfound">
    <v-layout row wrap>
      <v-flex
        d-flex
        v-for="item in items"
        :key="item.idx"
        v-bind="{ [`xs${item.flex}`]: true }"
      >
        <v-card flat>
          <v-card-title secondary-title>
            <div>
              <div class="display-3 secondary--text" v-text="item.title" v-if="item.title">title</div>
              <span class="grey--text" v-text="item.titleSub" v-if="item.titleSub"></span>
            </div>
          </v-card-title>

          <!--<v-img :src="images[num]" v-bind:lazy-src="images[num]" aspect-ratio="1" class="not"></v-img>-->
          <div class="v-image" @click="fn_random">
            <img :src="images[num]" :lazy-src="images[num]">
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // props: ["name"],
  components: {
  },
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
      // appName: "HAEMILSOFT",
      num: 0,
      key: false,
      images: [
        require('../assets/images/ca/Balrog-Dizzy.gif'),
        require('../assets/images/ca/Blanka-Dizzy.gif'),
        require('../assets/images/ca/Chunri-Dizzy.gif'),
        require('../assets/images/ca/Dhalsim-Dizzy.gif'),
        require('../assets/images/ca/Makoto-Dizzy.gif'),
        require('../assets/images/ca/Makoto.webp'),
        require('../assets/images/ca/Sodom-Dizzy.gif'),
        require('../assets/images/ca/Zangief-Dizzy.gif'),
        require('../assets/images/ca/Zangief-mech-walk.gif')
      ],
      items: [
        {
          idx: 0,
          flex: '12',
          title: '404 page not found',
          titleSub: 'The requested URL / was not found on this server.',
          article: '',
          src: require('../assets/images/ca/Ryu3s-stance.gif')
        }
      ]
    }
  },
  mounted () {
    this.fn_random()
  },
  methods: {
    fn_random: function () {
      this.num = Math.round(Math.random() * (this.images.length - 1))
    }
  }
}
</script>
<style lang="scss" scoped>
.v-image__image {
  background-size: auto !important;
  background-position: center bottom !important;
}
.v-card__title {
  transform-origin: 0;
  transform: rotate(-90deg) translateX(-26px) translateY(0px);
  position: absolute;
  bottom: 56px;
  width: 480px;
  height: 140px;
  left: 50%;
  margin-left: -25px;
}
.detail .v-card__title {
  background-color: transparent !important;
}
.detail .v-card__text {
  background-color: #fff !important;
}

.v-image {
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  -webkit-filter: grayscale(0.69);
  filter:grayscale(0.69)
}
.notfound {
  display: flex;
  align-items: flex-end;
  img{
    padding: 0;
  }
}
</style>
