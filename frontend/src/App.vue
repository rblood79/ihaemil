<template>
  <v-app v-bind:class="isDetail">
    <guide axisV v-if="!$store.state.isMobile && $route.meta.layout === 'default'"></guide>

    <header v-if="!$store.state.isMobile">
      <v-toolbar app height="56px">
        <v-toolbar-title class="hidden-sm-and-down">{{$store.state.appName}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <keep-alive>
          <menu-bar
            v-bind:class="{ active: position }"
            class="hidden-sm-and-down"
            menuPosition="top"
            v-if="$route.meta.layout === 'default'"
          ></menu-bar>
          <v-btn fab round flat @click="fn_back" v-else>
            <v-icon class="clear">clear</v-icon>
          </v-btn>
        </keep-alive>
      </v-toolbar>
    </header>

    <v-content ref="xxx">
      <keep-alive>
        <transition name="slide-top" v-if="$store.state.isMobile">
          <component :is="layout"></component>
        </transition>
        <component :is="layout" v-else></component>
      </keep-alive>
    </v-content>

    <v-footer height="56px" app v-bind:class="{ active: $store.state.isMenu }">
      <div class="overay" @click="fn_menu" v-if="$store.state.isMenu"></div>
      <aside class="menu-mobile" v-if="$store.state.isMobile">
        <div></div>
        <keep-alive>
          <menu-bar menuPosition="side"></menu-bar>
        </keep-alive>
      </aside>

      <div class="footer-group">
        <span class="copyright">Copyright &copy; 2014 {{$store.state.appName}} co,Ltd.</span>
        <v-spacer></v-spacer>
        <span class="other" v-html="$store.state.appBuilderM" v-if="$store.state.isMobile"></span>
        <span class="other" v-html="$store.state.appBuilder" v-else></span>
      </div>

      <v-btn
        fab
        flat
        @click="fn_menu"
        v-if="$route.meta.layout === 'default' && $store.state.isMobile"
      >
        <v-icon class="subject" v-if="!$store.state.isMenu">subject</v-icon>
        <v-icon class="clear" v-else>clear</v-icon>
      </v-btn>
      <v-btn fab flat @click="fn_back" v-else-if="$store.state.isMobile">
        <v-icon class="clear">clear</v-icon>
      </v-btn>

      <button class="downTab" v-if="$store.state.isMobile && $route.meta.layout === 'default'">
        <!--<v-icon>keyboard_arrow_down</v-icon>-->
        <div class="container">
          <v-icon class="chevron">keyboard_arrow_down</v-icon>
          <v-icon class="chevron">keyboard_arrow_down</v-icon>
          <v-icon class="chevron">keyboard_arrow_down</v-icon>
        </div>
      </button>
    </v-footer>
  </v-app>
</template>

<script>
import store from "./store";
import router from "./router";
import Guide from "@/components/Guide.vue";
import MenuBar from "@/components/Menus.vue";

const default_layout = "default";

export default {
  components: {
    Guide,
    MenuBar
    // 'Guide': () => import('@/components/Guide.vue'),
    // 'MenuBar': () => import('@/components/Menus.vue'),
    /* swiper,
    swiperSlide */
  },
  data() {
    return {
      isTest: true,
      isMobile: false,
      isDetail: "default",
      sidebar: false,
      position: false,
      deltaY: 0,
      transitionName: "zoom-in",
      scrollPosition: 0,
      startScrollPosition: 0,
      ticking: false,
      isMenu: this.$store.state.isMenu,
      swipeDirection: "None"
    };
  },
  beforeDestroy() {
    /* if (typeof window !== 'undefined') {
      window.removeEventListener('pointerdown', this.fn_pointer, {
        passive: true
      })
      window.removeEventListener('pointerup', this.fn_pointer, {
        passive: true
      })
      window.removeEventListener('resize', this.fn_resize, { passive: true })
      window.removeEventListener('scroll', this.fn_scroll, { passive: true })
      window.removeEventListener('wheel', this.fn_wheel, { passice: true })
    } */
  },
  computed: {
    layout() {
      // console.log("app computed:", this.$route.meta.layout);
      if (this.$route.meta.layout === "default") {
        this.isDetail = "default";
      } else {
        this.isDetail = "detail";
      }
      return (this.$route.meta.layout || default_layout) + "_layout";
    }
  },
  created() {
    var filter = "win16|win32|win64|mac|macintel";
    var _isMobile = false;
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        _isMobile = true;
      }
    }
    if (_isMobile || window.innerWidth < 1125) {
      store.commit("isMobile", { active: true });
    }
    store.commit("isTest", { active: this.isTest });
    this.appName = this.$store.state.appName;
  },
  /* created() {console.log(navigator.platform)
    this.appName = this.$store.state.appName;
    store.commit("isMobile", { active: window.innerWidth < 1125 });
    store.commit("isTest", { active: this.isTest });
  }, */
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출합니다
    // '$route': 'fetchData'
    $route() {
      let xz = this.$refs.xxx.$el.children[0];
      setTimeout(function() {
        xz.scrollTop = 0;
      }, 0);
    }
  },
  mounted() {
    let xx = this.$refs.xxx.$el.children[0];
    // console.log('app mounted')
    router.beforeEach((to, from, next) => {
      //console.log(to.meta.title, to.meta.layout)
      this.isDetail = to.meta.layout;
      // console.log('app mounted', to.meta.layout)
      if (to.meta.index > from.meta.index) {
        this.position = true;
      } else {
        this.position = false;
      }
      if (to.meta.transition) {
        this.transitionName = "zoom-in";
      } else {
        this.transitionName = "zoom-out";
      }
      next();
    });
    // window.addEventListener('pointerdown', this.fn_pointerDown, { passive: true })
    // window.addEventListener('pointerup', this.fn_pointerUp, { passive: true })
    // window.addEventListener('scroll', this.fn_scroll, { passive: true })
    // window.addEventListener('wheel', this.fn_wheel, { passive: true })
    // window.addEventListener('resize', this.fn_resize, { passive: true })
    // this.fn_resize()
  },
  methods: {
    swipe(direction) {
      this.swipeDirection = direction;
      if (direction === "Down") {
        this.bgColor = "#363636 !important";
      } else {
        this.bgColor = "#fff !important";
      }
    },
    fetchData() {
      //console.log("fetchData");
    },
    fn_scroll() {
      if (this.startScrollPosition > window.scrollY || window.scrollY <= 1) {
        this.deltaY = 0;
      } else {
        this.deltaY = 1;
      }
      store.commit("scrollY", { num: window.scrollY });
      this.startScrollPosition = window.scrollY;
    },
    fn_pointerUp(event) {
      console.log("fn_pointerUp");
      this.isPointer = "up";
      /* store.commit('scrollY', { num: window.scrollY })
      this.startScrollPosition = window.scrollY */
    },
    fn_pointerDown(event) {
      console.log("fn_pointerDown");
      this.isPointer = "down";
      /* store.commit('scrollY', { num: window.scrollY })
      this.startScrollPosition = window.scrollY */
    },
    fn_wheel(event) {
      this.startScrollPosition = window.scrollY;
    },
    fn_resize() {
      store.commit("isMobile", { active: window.innerWidth < 750 });
      store.commit("outHeight", { num: window.outerHeight });
      /* if (window.innerWidth < 1125) {
        store.commit('inHeight', { num: window.innerHeight })
      } else {
        store.commit('inHeight', { num: '100%' })
      } */
    },
    fn_back: function() {
      router.go(-1);
    },
    fn_menu: function() {
      if (this.$store.state.isMenu) {
        this.isMenu = false;
      } else {
        this.isMenu = true;
      }
      store.commit("isMenu", { active: this.isMenu });
    }
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.overay {
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.v-footer {
  &.active {
    .menu-mobile {
      bottom: 56px;
      transform: translate3d(0px, 0px, 0px);
    }
    .downTab {
      display: none;
    }
  }
}
.menu-mobile {
  z-index: 0;
  position: fixed;
  width: 100%;
  height: auto; /*calc(100vh - 56px);*/
  padding: 16px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  left: 0;
  bottom: -32px;
  transform: translate3d(0px, 280px, 0px);
  transition: 300ms cubic-bezier(0.59, 0.12, 0.34, 0.95);

  background-color: #fff;
  .v-item-group {
    display: flex;
    flex-direction: column;
    border-radius: 0;
    box-shadow: none;
    .v-btn {
      font-family: "Noto Sans Medium", sans-serif !important;
      padding: 18px;
      border: 0 !important;
    }
    .v-btn--active {
      /*background-color: #0277bd;*/
      color: #0277bd !important;
    }
    .v-btn--active:before,
    .v-btn:focus:before,
    .v-btn:hover:before {
      background-color: transparent;
    }
  }
}
.downTab {
  position: absolute;
  width: 56px;
  height: 56px;
  top: -14px;
  right: 0;
  z-index: 0;
  outline: 0;
  transform: rotate(180deg);
  .v-icon {
    font-size: 36px;
    color: #fff !important;
  }
  .container {
    position: relative;
    width: 56px;
    height: 56px;
  }

  .v-icon {
    position: absolute;
    width: 56px;
    height: 56px;
    left: 0;
    top: 0;
    opacity: 0;
    transform: scale3d(1, 0.5, 0.5);
    background-color: transparent;

    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
  }

  .chevron:before {
    left: 0;
  }

  .chevron:after {
    right: 0;
    width: 50%;
  }
}
@keyframes move {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  33% {
    opacity: 1;
    transform: translateY(35px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(56px);
  }
}
@keyframes pulse {
  to {
    opacity: 1;
  }
}
/*.swiper-container {
  background-color: #363636;
  .swiper-wrapper {
    border: 2px solid #f00;
  }
}*/

/*
.application--wrap {
  header {
    border: 1px solid #f00;
  }
  main {
    border: 1px solid #f00;
  }
  footer {
    border: 1px solid #f00;
  }
}
*/
</style>
