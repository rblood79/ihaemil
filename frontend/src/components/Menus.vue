<template>
  <v-tabs
    v-model="active"
    color="transparent"
    slider-color="primary"
    mobile-break-point="375"
    right
    v-if="!$store.state.isMobile"
  >
    <v-tab v-for="item in menuItems" :key="item.name" ripple :to="item.path">{{ item.name }}</v-tab>
    <!-- <a class="v-tabs__item" target="_blank" href="http://ihaemil.co.kr:8080">로그인</a> -->
  </v-tabs>

  <v-btn-toggle v-else>
    <v-btn flat v-for="item in menuItems" :key="item.name" :to="item.path">{{ item.name }}</v-btn>
  </v-btn-toggle>
</template>

<script>
// console.log(md)
// import router from "../router";
export default {
  props: ['menuPosition'],
  data () {
    return {
      drawer: null,
      menuItems: [
        { name: '시작', path: '/' },
        { name: '하는일', path: '/service' },
        { name: '소개', path: '/about' },
        { name: '지원', path: '/support' }
        // { name: "로그인", path: "/login"},
      ],
      active: null
    }
  },
  created () {
    // console.log('menu created')
  },
  mounted () {
    // console.log('menu mounted')
  },
  computed: {},
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = active < 2 ? active + 1 : 0
    }
  }
}
</script>
