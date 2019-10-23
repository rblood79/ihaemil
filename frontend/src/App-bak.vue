<template>
  <v-app>
    <guide axisV v-if="!$store.state.isMobile"></guide>
    <header>
      <v-toolbar app :clipped-left="$vuetify.breakpoint.lgAndUp" height="56px">
        <v-toolbar-title class="hidden-sm-and-down">{{$store.state.appName}}</v-toolbar-title>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <span
          class="test"
          v-if="isTest"
        >{{$store.state.outHeight}} / {{$store.state.inHeight}} / {{$store.state.scrollY}}</span>

        <keep-alive>
          <menu-bar
            v-bind:class="{ active: position }"
            class="hidden-sm-and-down2"
            menuPosition="top"
            v-if="$route.meta.layout === 'default'"
          ></menu-bar>

          <v-btn fab round flat @click="fn_back" v-else>
            <v-icon class="clear">clear</v-icon>
          </v-btn>
        </keep-alive>
      </v-toolbar>
    </header>

    <main>
      <swiper :options="swiperOptionh">
        <swiper-slide>landing</swiper-slide>
        <swiper-slide>
          <swiper :options="swiperOptionv">
            <swiper-slide>service / product</swiper-slide>
            <swiper-slide>service / application</swiper-slide>
            <swiper-slide>service / system</swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperOptionv">
            <swiper-slide>about / story</swiper-slide>
            <swiper-slide>about / member</swiper-slide>
            <swiper-slide>about / history</swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperOptionv">
            <swiper-slide>support / form</swiper-slide>
            <swiper-slide>support / news</swiper-slide>
            <swiper-slide>support / data</swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperOptionv">
            <swiper-slide>member / login</swiper-slide>
            <swiper-slide>member / join</swiper-slide>
            <swiper-slide>member / information</swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
      </swiper>
    </main>

    <keep-alive>
      <footer-bar></footer-bar>
    </keep-alive>
  </v-app>
</template>

<script>
import store from './store'
import router from './router'
import Guide from '@/components/Guide.vue'
import MenuBar from '@/components/Menus.vue'
import FooterBar from '@/components/Footer.vue'

export default {
  components: {
    Guide,
    MenuBar,
    FooterBar
    /* swiper,
    swiperSlide */
  },
  data () {
    return {
      isTest: false,
      isMobile: false,
      isDetail: 'default',
      sidebar: false,
      position: false,
      deltaY: 0,
      appName: 'appName',
      transitionName: 'zoom-in',
      scrollPosition: 0,
      startScrollPosition: 0,
      ticking: false,

      swiperOptionh: {
        spaceBetween: 2,
        hashNavigation: true,
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '' + '</span>'
          }
        }
      },

      swiperOptionv: {
        direction: 'vertical',
        spaceBetween: 2,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true
        }
      }
    }
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('pointerdown', this.fn_pointer, {
        passive: true
      })
      window.removeEventListener('pointerup', this.fn_pointer, {
        passive: true
      })
      window.removeEventListener('resize', this.fn_resize, { passive: true })
      window.removeEventListener('scroll', this.fn_scroll, { passive: true })
      window.removeEventListener('wheel', this.fn_wheel, { passice: true })
    }
  },
  computed: {
    layout () {
      // console.log('app computed')
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  },
  created () {
    this.appName = this.$store.state.appName
    store.commit('isMobile', { active: window.innerWidth < 1125 })
    store.commit('isTest', { active: this.isTest })
    // console.log('app created')
  },
  mounted () {
    // console.log('app mounted')
    router.beforeEach((to, from, next) => {
      this.isDetail = to.meta.layout
      // console.log('app mounted', to.meta.layout)
      if (to.meta.index > from.meta.index) {
        this.position = true
      } else {
        this.position = false
      }
      if (to.meta.transition) {
        this.transitionName = 'zoom-in'
      } else {
        this.transitionName = 'zoom-out'
      }
      next()
    })
    window.addEventListener('pointerdown', this.fn_pointer, { passive: true })
    window.addEventListener('pointerup', this.fn_pointer, { passive: true })
    window.addEventListener('scroll', this.fn_scroll, { passive: true })
    window.addEventListener('wheel', this.fn_wheel, { passive: true })
    window.addEventListener('resize', this.fn_resize, { passive: true })
    this.fn_resize()
  },
  methods: {
    fn_scroll () {
      if (this.startScrollPosition > window.scrollY || window.scrollY <= 1) {
        this.deltaY = 0
      } else {
        this.deltaY = 1
      }
      store.commit('scrollY', { num: window.scrollY })
      this.startScrollPosition = window.scrollY
    },
    fn_pointer (event) {
      this.startScrollPosition = window.scrollY
    },
    fn_wheel (event) {
      this.startScrollPosition = window.scrollY
    },
    fn_resize () {
      store.commit('isMobile', { active: window.innerWidth < 750 })
      store.commit('outHeight', { num: window.outerHeight })
      if (window.innerWidth < 1125) {
        // store.commit("inHeight", { num: window.innerHeight - 56 })
        store.commit('inHeight', { num: window.innerHeight })
      } else {
        store.commit('inHeight', { num: '100%' })
      }
    },
    fn_back: function () {
      router.go(-1)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.application--wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  header {
    width: 1500px;
    max-width: 100%;
    height: 56px;
    nav {
      position: relative;
      box-shadow: none;
    }
  }
  main {
    border: 0px solid #f00;
    max-width: 100%;
    max-height: 100%;
    width: 1500px;
    height: calc(100% - 112px);
    .swiper-container {
      height: 100%;
      .swiper-slide {
        background-color: #fff;
      }
    }
  }
  footer {
    width: 1500px;
    max-width: 100%;
    position: relative;
  }
}
</style>
