<!--template-->
<template>
  <v-container>
    <!--<guide axisV v-if="!$store.state.isMobile"></guide>-->
    <div class="line"></div>
    <svg
      version="1.1"
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="-22 0 220 63"
      xml:space="preserve"
    >
      <rect x="33.5" y="7.5" width="5.8" height="24.5" class="logo-svg" />
      <polygon
        points="32.1,17 29.9,17 29.9,7.5 24.1,7.5 24.1,32 29.9,32 29.9,22.8 32.1,22.8 "
        class="logo-svg"
      />
      <rect y="7.6" width="21" height="5.8" class="logo-svg" />
      <path
        d="M13.4,2.9c0,1.6-1.3,2.9-2.9,2.9S7.6,4.5,7.6,2.9S8.9,0,10.5,0S13.4,1.3,13.4,2.9L13.4,2.9z"
        class="logo-svg"
      />
      <polygon
        points="90.6,43.9 90.5,43.8 90.6,43.8 90.6,38 69.6,38 69.6,43.8 82.4,43.8 69.6,56.6 69.6,56.6 69.6,56.6 69.6,62.5
	90.6,62.5 90.6,56.6 77.8,56.6 "
        class="logo-svg"
      />
      <polygon
        points="60.3,7.7 54.5,7.7 54.5,26.4 54.5,32.2 68.2,32.2 68.2,26.4 60.3,26.4 60.3,13.6 69.6,13.6 69.6,32.2 75.4,32.2
	75.4,13.6 75.4,7.7 "
        class="logo-svg"
      />
      <path
        d="M163.9,26.4H161V13.6h2.9V7.8H143v5.8h2.9v12.8H143v5.8h20.9V26.4z M151.7,26.4V13.6h3.5v12.8H151.7z"
        class="logo-svg"
      />
      <rect x="105.7" y="38" width="94.3" height="5.8" class="logo-svg" />
      <rect x="179.1" y="7.7" width="20.9" height="5.8" class="logo-svg" />
      <rect x="179.1" y="17" width="20.9" height="5.8" class="logo-svg" />
      <rect x="179.1" y="26.4" width="20.9" height="5.8" class="logo-svg" />
      <polygon
        points="110.8,31.7 117.7,19.3 124.2,31 129.3,28.2 117.9,7.7 117.9,7.7 117.9,7.7 117.5,7.7 117.5,7.8 114.4,13.2
	114.3,13.3 114.3,13.4 105.7,28.8 "
        class="logo-svg"
      />
      <path
        d="M114.7,33.9c0,1.6,1.3,2.9,2.9,2.9s2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9S114.7,32.3,114.7,33.9L114.7,33.9z"
        class="logo-svg"
      />
      <path
        d="M14.5,11.9C9.2,9.7,3,12.2,0.8,17.6s0.3,11.5,5.7,13.7S18,31,20.2,25.6l0,0C22.4,20.2,19.8,14.1,14.5,11.9z M10.5,26.2
	c-2.6,0-4.7-2.1-4.7-4.6c0-2.6,2.1-4.7,4.6-4.7s4.7,2.1,4.7,4.6l0,0C15.1,24.1,13.1,26.2,10.5,26.2L10.5,26.2L10.5,26.2z"
        class="logo-svg"
      />
    </svg>
  </v-container>
</template>

<!--script-->
<script>
// import store from '../store'
export default {
  name: 'Landing',
  components: {},
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      packageSrc: require('../assets/images/package_atto.png')
    }
  }
}
</script>

<!--style-->
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

.container {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center !important;
  height: 100%;
  position: relative !important;

  svg {
    padding: 64px 0 0 0;
    width: 210px;
    height: auto;
    z-index: 11;
    .logo-svg {
      fill: #fff;
    }
  }

  .line {
    width: 6px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: calc(-50% + 43px);
    left: calc(50% - 3px);
  }

  .package-atto {
    width: 224px;
    height: auto;
    position: absolute;
    bottom: 0px;
  }
}

@media (max-width: 750px) {
  .nav-slider {
    right: 0px;
  }
}
</style>
