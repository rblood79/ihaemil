<!--template-->
<template>
  <div class="slideshow-wrapper">
    <vue-displacement-slideshow
      :images="images"
      :displacement="displace[currentDisplacement]"
      :intensity="-0.65"
      :speedIn="1.2"
      :speedOut="1.2"
      ease="Expo.easeInOut"
      ref="displacement"
      class="slideshow"
      @loaded="onLoaded"
      @animationEnd="aniEnd"
    ></vue-displacement-slideshow>
    <div class="nav-slider">
      <v-btn fab color="white" depressed v-on:click="prev">
        <v-icon class="prev ti-10">arrow_back_ios</v-icon>
      </v-btn>
      <v-btn fab color="light-blue accent-3" depressed v-on:click="next">
        <v-icon class="next" color="white">arrow_forward_ios</v-icon>
      </v-btn>
    </div>
    <p class="landing-title">Welcome to the big screens.</p>
  </div>
</template>

<!--script-->
<script>
// import store from '../store'
import VueDisplacementSlideshow from 'vue-displacement-slideshow'

export default {
  name: 'Landing',
  components: {
    VueDisplacementSlideshow
  },
  data () {
    return {
      windowWidth: 0,
      windowHeight: 0,
      ani: false,
      counter: 0,
      currentDisplacement: 1,
      loaded: false,
      items: [
        {
          itemTitle: 'hi haemilsoft coporation',
          itemSub: 'developer group in place',
          itemComment: 'displacement style',
          imageView: '../assets/images/denys-nevozhai-191635.jpg',
          imageDis: '../assets/images/displacement/8.jpg'
        },
        {
          itemTitle: 'ATTO report',
          itemSub: 'easy fast multi builder',
          itemComment: 'activeX dont use it',
          imageView: '../assets/images/denys-nevozhai-191635.jpg',
          imageDis: '../assets/images/displacement/8.jpg'
        },
        {
          itemTitle: 'N Design',
          itemSub: 'multi Application build',
          itemComment: 'activeX dont use it',
          imageView: '../assets/images/denys-nevozhai-191635.jpg',
          imageDis: '../assets/images/displacement/8.jpg'
        }
      ]
    }
  },
  computed: {
    images () {
      return [
        require('../assets/images/logo.jpg'),
        require('../assets/images/spencer.jpg'),
        require('../assets/images/portfolio-8.jpg')
      ]
    },
    displace () {
      return [
        require('../assets/images/displacement/8.jpg'),
        require('../assets/images/displacement/4.png'),
        require('../assets/images/displacement/strip.png'),
        require('../assets/images/displacement/6.jpg'),
        require('../assets/images/displacement/14.jpg'),
        require('../assets/images/displacement/7.jpg'),
        require('../assets/images/displacement/fluid.jpg')
      ]
    }
    /* ...mapGetters([
                "getCurrentDisplacement",
                "getDisplacements"
            ]) */
  },
  methods: {
    init () {
      // this.fn_render()
      // We loop through all our images by calling the 'next' method of our component every 2 seconds
      /* setInterval(() => {
        this.$refs.displacement.next();
      }, 2000); */
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },

    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    },
    next: function () {
      if (!this.ani) {
        this.ani = true
        this.counter += 1
        if (this.counter > this.items.length - 1) {
          this.counter = 0
        }
        this.$refs.displacement.next()
        // this.fn_commit();
      }
    },
    prev: function () {
      if (!this.ani) {
        this.ani = true
        this.counter -= 1
        if (this.counter < 0) {
          this.counter = this.items.length - 1
        }
        this.$refs.displacement.previous()
        // this.fn_commit();
      }
    },
    onLoaded () {
      this.loaded = true
      this.$forceUpdate()
    },
    aniEnd () {
      this.ani = false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    /* window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight); */
  }
}
</script>

<!--style-->
<style scoped>
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
.landing-title {
  position: absolute;
}
.router {
  border: 2px solid #f00;
  position: relative;
  width: 100%;
  height: 100%;
}
.wrapper {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slideshow-wrapper {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
}

.slideshow {
  /*filter: grayscale(0.6);*/
}

.nav-slider {
  position: absolute;
  transform: translate(1388px, -56px);
  z-index: 3;
}
.nav-slider button {
  margin: 0;
}
.v-btn {
  border-radius: 0;
}
.ti-10 {
  text-indent: 10px;
}
.v-icon.prev {
  color: #4bb4e7 !important;
}
.v-icon.next {
  color: #ffffff !important;
}
@media (max-width: 750px) {
  .slideshow-wrapper {
    /*position:relative;*/
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    margin-left: 0px;
    margin-top: 0px;
  }
  .nav-slider {
    right: 0px;
  }
}
</style>
