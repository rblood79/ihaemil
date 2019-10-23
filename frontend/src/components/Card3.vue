<template>
  <!--<v-card flat v-bind:style="{ 'height': inHeight + 'px' }">-->
  <v-card flat>
    <v-img v-bind:src="src" v-bind:lazy-src="src" aspect-ratio="16/9">
      <div class="v-img-cover"></div>

      <v-container fill-height fluid>
        <div class="header">
          <h3 class="headline-mobile headline secondary--text" v-if="title">{{title}}</h3>
          <h4 class="caption white--text" v-if="titleSub">{{titleSub}}</h4>
        </div>
        <div class="contents">
          <v-spacer></v-spacer>
          <strong class="strong white--text" v-html="article" v-if="article"></strong>
          <v-btn color="accent" depressed v-if="path || path !=''" :to="path">{{label}}</v-btn>
          <v-spacer v-else></v-spacer>
        </div>
      </v-container>

      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="white"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>
  </v-card>
</template>
<script>
// import store from "../store";

export default {
  props: {
    id: Number,
    title: String,
    titleSub: String,
    article: String,
    label: String,
    src: String,
    path: String
  },
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      items: []
    }
  },
  created () {
    // console.log('mode: ',this.isTest)
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    // this.fetchData()
  },
  mounted () {
    // console.log("card mounted id:",this.id,' / title:',this.title);
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.strong {
  display: none;
}
.spacer {
  flex-grow: 0 !important;
}

.detail {
  .v-card__text {
    background-color: transparent !important;
  }
}

.v-card > :last-child:not(.v-btn):not(.v-chip) {
  background-color: transparent !important;
}

.v-card {
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: transparent !important;
  &:hover {
    .v-image {
      .v-image__image {
        transform: scale(1.1);
      }
      .v-responsive__content {
        .v-img-cover {
          opacity: 0;
        }
      }
    }
  }

  .v-card__text {
    background-color: transparent !important;
  }
  .v-card__title,
  .v-card__title--primary {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
  .v-image {
    height: inherit;
    z-index: 2;
    .v-image__image {
      transition: transform 1s cubic-bezier(0.59, 0.12, 0.34, 0.95);
      transform: scale(1);
    }
    .v-responsive__content {
      .v-img-cover {
        /*background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.75) 0,
          rgba(0, 0, 0, 0.25) 50%,
          rgba(0, 0, 0, 0.25) 50%,
          rgba(0, 0, 0, 0) 90%
        );*/
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        pointer-events: none;
        opacity: 1;
        transition: opacity 1s ease-out;
      }
      width: 100%;
      .v-btn {
        min-width: 140px;
      }
    }
  }
}

@media (max-width: 750px) {
  .container {
    .header {
    }
    .contents {
      justify-content: space-between;
      align-items: center;
    }
  }

  .strong {
    display: block;
  }

  .v-card {
    .v-card__title {
      padding-top: 0px !important;
      padding-bottom: 0px;
      .headline-mobile {
        margin-top: 0;
      }
      .caption {
        margin-bottom: 0;
      }
    }
    &:hover {
      .v-image {
        .v-image__image {
          transition: none;
          transform: scale(1);
        }
        .v-responsive__content {
          .v-img-cover {
            opacity: 1 !important;
          }
        }
      }
    }
  }
}
</style>
