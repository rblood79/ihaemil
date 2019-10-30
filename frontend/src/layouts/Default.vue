
<template>
  <swiper
    :options="swiperOption"
    v-bind:class="[$route.name]"
    v-if="$store.state.isMobile"
    ref="visualm"
  >
    <swiper-slide class="block block0">
      <transition name="slide-bottom">
        <router-view name="router0"></router-view>
      </transition>
    </swiper-slide>
    <swiper-slide class="block block1">
      <transition name="slide-bottom">
        <router-view name="router1"></router-view>
      </transition>
    </swiper-slide>
    <swiper-slide class="block block2">
      <transition name="slide-bottom">
        <router-view name="router2"></router-view>
      </transition>
    </swiper-slide>
    <swiper-slide class="block block3">
      <transition name="slide-bottom">
        <router-view name="router3"></router-view>
      </transition>
    </swiper-slide>
  </swiper>

  <div class="swiper-container" v-else>
    <v-container fluid class="visual swiper-wrapper" v-bind:class="[$route.name]" ref="visual">
      <div name="block0" class="block block0 swiper-slide">
        <keep-alive>
          <transition name="slide-left" v-if="!$store.state.isMobile">
            <router-view name="router0"></router-view>
          </transition>
        </keep-alive>
      </div>
      <div name="block1" class="block block1 swiper-slide">
        <keep-alive>
          <transition name="slide-right" v-if="!$store.state.isMobile">
            <router-view name="router1"></router-view>
          </transition>
        </keep-alive>
      </div>
      <div name="block2" class="block block2 swiper-slide">
        <keep-alive>
          <transition name="slide-bottom" v-if="!$store.state.isMobile">
            <router-view name="router2"></router-view>
          </transition>
        </keep-alive>
      </div>
      <div name="block3" class="block block3 swiper-slide">
        <keep-alive>
          <transition name="slide-top" v-if="!$store.state.isMobile">
            <router-view name="router3"></router-view>
          </transition>
        </keep-alive>
      </div>
    </v-container>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
import store from "../store";
import router from "../router";

export default {
  data() {
    return {
      transitionName: "slide-top",
      items: [],
      swiperOption: {
        //speed: 0,
        direction: "vertical",
        hashNavigation: true
      }

      /* swiperOptionh: {
        spaceBetween: 2,
        hashNavigation: true,
        pagination: {
          el: ".swiper-pagination-h",
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '">' + "" + "</span>";
          }
        }
      },

      swiperOptionv: {
        direction: "vertical",
        spaceBetween: 2,
        pagination: {
          el: ".swiper-pagination-v",
          clickable: true
        }
      } */
    };
  },
  created() {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    // this.fetchData()
  },
  destroyed() {},
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    // '$route': 'fetchData'
  },
  mounted() {
    let idx = null;
    let ss = null;
    // console.log('aaaapp created',this.$store.state.isMobile, this.$refs["visualm"])
    if (this.$store.state.items <= 0 && !this.$store.state.isMobile) {
      store.commit("items", {
        array: this.fn_array(this.$refs["visual"])
      });
    }

    if (this.$store.state.isMobile) {
      ss = this.$refs.visualm.$el.children[0];
    }

    router.beforeEach((to, from, next) => {
      //console.log(to.meta.layout, " / ", to.path.split("/").length);
      idx = to.meta.id;
      if (this.$store.state.isMobile || to.meta.layout == "detail") {
        next();
        return;
      }

      if (to.path.split("/").length > 2) {
        this.transitionName = to.meta.transition;
        next();
      } else {
        this.fn_sub(
          next,
          this.$store.state.itemsValue[idx],
          this.$store.state.items,
          idx
        );
      }
    });

    router.afterEach((to, from) => {
      store.commit("isMenu", { active: false });
      // window.scrollTo(0, 0)
      if (this.$store.state.isMobile && to.meta.layout != "detail") {
        if (to.path.split("/").length == from.path.split("/").length) {
          setTimeout(function() {
            ss.removeAttribute("style");
          }, 0);
        };
      };
    });
  },
  computed: {},
  beforeDestroy() {},
  methods: {
    fetchData() {
      // 데이터 가져오기 위한 유틸리티/API 래퍼로 변경합니다.
    },
    fn_random() {
      return Math.random(1000);
    },
    fn_array(elements) {
      let arr = [];
      for (var i = 0; i < elements.childNodes.length - 1; i++) {
        arr[i] = elements.childNodes[i];
      }
      return arr;
    },
    fn_sub: function(next, itemsValue, items, idx) {
      const vLangth = items.length - 1;
      if (idx > 0) {
        items.forEach(function(element, index) {
          if (element.children.length > 0) {
            element.children[0].classList.add("hide");
          }
          Velocity(
            element,
            {
              "max-width": itemsValue.width[index],
              "max-height": itemsValue.height[index],
              left: itemsValue.x[index],
              top: itemsValue.y[index]
              // 'background-color': itemsValue.background[index]
            },
            {
              delay: itemsValue.delay[index],
              duration: 360,
              easing: [0.25, 0.8, 0.5, 1],
              complete: function() {
                if (element.children.length > 0) {
                  element.children[0].classList.remove("hide");
                }
                if (index === vLangth || idx === 0) {
                  next();
                }
              }
            }
          );
        });
      } else {
        items[0].children[0].classList.add("hide");
        Velocity(
          items[0],
          {
            "max-width": itemsValue.width[0],
            "max-height": itemsValue.height[0]
          },
          {
            duration: 360,
            easing: [0.25, 0.8, 0.5, 1],
            complete: function() {
              items[0].children[0].classList.remove("hide");
              items[0].removeAttribute("style");
              next();
            }
          }
        );
      }
    }
  }
};
</script>
<style lang="scss">
@media (max-width: 750px) {
  .move {
    transform: translate3d(0px, 0px, 0px) !important;
  }
  main.v-content {
    .v-content__wrap {
      height: 100%;
      /*min-height: calc(100vh - 56px);*/
      flex-direction: column;
      justify-content: flex-start !important;
      .swiper-container {
        height: 100%;

        .swiper-wrapper {
          flex-direction: column;
          .block0 {
            background-color: #0277bd;
          }
          .block1 {
            background-color: #363636;
          }
          .block2 {
            background-color: #2f5aa8;
          }
          .block3 {
            background-color: #1e9cd9;
          }
          .block {
            /*background-color: #03a9f4;
            background-color: #0277bd;*/
            .container {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 0;
              .header {
                flex: 0 1 auto;
                width: 100%;
                padding: 0;
                .headline {
                  font-family: "Noto Sans Medium", sans-serif !important;
                  font-size: 21px !important;
                  letter-spacing: -2.1px !important;
                  font-weight: normal !important;
                  display: flex;
                  align-items: center;
                  height: 48px;
                  padding: 24px 24px 0 24px;

                  background-color: #363636;
                  align-items: center;
                  padding: 0 16px;
                  color: #03a9f4 !important;
                  caret-color: #03a9f4 !important;
                }
                .caption {
                  font-size: 14px !important;
                  text-decoration: underline;
                  text-underline-position: under;
                  display: flex;
                  align-items: flex-start;
                  padding: 0 24px;

                  margin-bottom: 0px;
                  min-height: 36px;
                  background-color: rgba(0, 0, 0, 0.4);
                  color: #fff;
                  align-items: center;
                  padding: 7px 16px;
                }
              }
              .contents {
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                width: 100%;
                padding: 16px;
                z-index: 2;
                border: 0px solid #0ff;
              }
            }
          }
        }
      }
    }
  }
  .swiper-container.Landing {
    .swiper-wrapper {
      transform: translate3d(0px, 0px, 0px) !important;
    }
  }
  /*.swiper-horizen >{
    .swiper-wrapper{
      flex-direction: row !important;
    }

  }
  .swiper-slide {
    background: #fff;
    color: #363636;
    border: 0px solid #f00;
  }*/
}
</style>
