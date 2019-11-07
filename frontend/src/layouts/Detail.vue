
<template>
  <keep-alive>
    <!--
    <swiper :options="swiperOption" v-if="$store.state.isMobile">
      <swiper-slide>
        <router-view name="detail"></router-view>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
    -->
    <router-view name="detail"></router-view>
  </keep-alive>
</template>

<script>
import store from '../store'
export default {
  props: {},
  data () {
    return {
      /* swiperOption: {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        mousewheel: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          hide: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        }
      } */
    }
  },
  created () {
    // console.log('created')
  },
  mounted () {}
}
</script>
<style lang="scss">
.application.detail {
  .v-content {
    overflow: hidden;
    .v-content__wrap {
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
          .swiper-slide {
            height: auto;
            .container {
              max-width: 750px;
            }
          }
        }
      }
      .v-card {
        outline: 2px solid #fff;
      }
    }
  }
}
</style>
