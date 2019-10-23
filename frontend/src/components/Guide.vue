<template>
  <div class="guide-group">
    <ul tag="ul" class="guide vertical" ref="guideVertical" v-if="this.axisV">
      <li v-for="n in 5" :key="n" class="guide-item"></li>
    </ul>
    <ul tag="ul" class="guide horizental" ref="guideHorizental" v-if="this.axisH">
      <li v-for="n in 3" :key="n" class="guide-item"></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    axisV: Boolean,
    axisH: Boolean
  },
  data () {
    return {}
  },
  created () {
    // console.log(this.axisV, this.axisH);
  },
  mounted () {},
  methods: {
    fn_test: function () {
      // console.log()
    }
  }
}
</script>
<style lang="scss" scoped>
$linear-gradient-blue: linear-gradient(135deg, #24ccfb 0%, #1b8ffe 100%);

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.guide-group {
  position: fixed;
  z-index: 0;
  left:0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  .guide {
    position: absolute;
    display: flex;
    &.vertical {
      left: 50%;
      margin-left: -750px;
      top:0;
      height: 100%;
      width: 1500px;
      flex-direction: row;
      justify-content: space-between;
      .guide-item {
        min-width: 1px;
        max-width: 1px;
        width: 1px;
        background: rgba(0, 0, 0, 0.1);
      }
    }
    &.horizental {
      left: 0;
      top:50%;
      margin-top: -320px;
      height: 640px;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
      .guide-item {
        min-height: 1px;
        max-height: 1px;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}

@keyframes gra-animation-horizental {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gra-animation-vertical {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}

/*
 * ----------------------------------------
 * animation color-change-5x
 * ----------------------------------------
 */
@-webkit-keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}
@keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}

.guide.vertical li:nth-child(3) {
  /*background: $linear-gradient-blue !important;*/
  background: linear-gradient(180deg, #FFFFFF, #1b8ffe, #FFFFFF);
  background-size: 600% 600%;
  animation: gra-animation-vertical 6s cubic-bezier(0.25, 0.8, 0.5, 1) infinite;

  /*animation: color-change-5x 8s linear infinite alternate both;*/
}
.guide.horizental li:nth-child(2) {
  /*background: $linear-gradient-blue !important;*/
  background: linear-gradient(90deg, #FFFFFF, #1b8ffe, #FFFFFF);
  background-size: 1200% 1200%;
  animation: gra-animation-horizental 6s cubic-bezier(0.25, 0.8, 0.5, 1) infinite;

  /*animation: color-change-5x 8s linear infinite alternate both;*/
}
</style>
