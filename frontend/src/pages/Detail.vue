<template>
  <v-layout>
      <h3 class="headline secondary--text" v-if="title">title:{{title}}</h3>
      <h4 class="caption white--text" v-if="titleSub">sub:{{titleSub}}</h4>
      <p>
          {{article}}
      </p>
      <v-btn color="dark darken-2" dark @click="$router.go(-1)">
        <v-icon dark left>arrow_back</v-icon>뒤로가기
      </v-btn>
    </v-layout>
</template>
<script>
export default {
  // props: ["name"],
  components: {
  },
  /* props: {
    id: String,
    title: String,
    titleSub: String,
    article: String,
    tag: String,
    src: String,
    path: String
  }, */
  data () {
    return {
      items: []
    }
  },
  mounted () {},
  methods: {

  }
}
</script>
