<template>
  <v-container fluid>
    <div class="header">
      <h2 class="headline-mobile headline secondary--text" v-if="title">{{title}}</h2>
      <h3 class="caption white--text" v-if="titleSub">{{titleSub}}</h3>
    </div>
    <v-text-field class="search" v-model="search" label="search" required></v-text-field>
    <v-list>
      <v-list-tile v-for="( item, index ) in items" :key="item.index" avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            <a v-html="item.title"></a>
          </v-list-tile-title>
          <v-list-tile-sub-title v-html="item.date"></v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-badge color="grey" right>
            <template v-slot:badge v-if="item.replay > 0">
              <span>{{item.replay}}</span>
            </template>
            <v-icon :color="item.replay > 0 ? '#03a9f4' : 'grey'">chat_bubble</v-icon>
          </v-badge>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-container>
</template>
<script>
import route from '../router'
export default {
  // props: ["name"],
  components: {},
  data () {
    return {
      title: '새로운 소식',
      titleSub: '누군가 먼저 겪였던 일',
      search: '',

      itemList: [
        {
          title: '인쇄가 안되요',
          date: '2019. 01. 31',
          image: 'https://vuejs.org//images/logo.png',
          replay: 4
        },
        {
          title: '화면이 안보일떄',
          date: '2019. 01. 31',
          image:
            'https://daynin.github.io/clojurescript-presentation/img/react-logo.png',
          replay: 2
        },
        {
          title: '저장이 안되요',
          date: '2019. 01. 31',
          image: 'https://angularjs.org/img/ng-logo.png'
        },
        {
          title: '이미지가 안보여요',
          date: '2019. 01. 31',
          image:
            'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200',
          replay: 8
        },
        {
          title: 'Meteor.js',
          date: '2019. 01. 31',
          image:
            'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
        },
        {
          title: 'Aurelia',
          date: '2019. 01. 31',
          image: 'https://cdn.auth0.com/blog/aurelia-logo.png'
        },
        {
          title: 'Node.js',
          date: '2019. 01. 31',
          image: 'https://code-maven.com/img/node.png'
        },
        {
          title: 'Pusher',
          date: '2019. 01. 31',
          image: 'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
        },
        {
          title: 'Feathers.js',
          date: '2019. 01. 31',
          image: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
        },
        {
          title: 'Aurelia',
          date: 'aaaaaaaaaa',
          image: 'https://cdn.auth0.com/blog/aurelia-logo.png'
        },
        {
          title: 'Node.js',
          date: 'nnnnnn',
          image: 'https://code-maven.com/img/node.png'
        },
        {
          title: 'Pusher',
          date: 'ppppppppp',
          image: 'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
        },
        {
          title: 'Feathers.js',
          date: 'fffffffffff',
          image: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
        },
        {
          title: 'Aurelia',
          date: 'aaaaaaaaaa',
          image: 'https://cdn.auth0.com/blog/aurelia-logo.png'
        },
        {
          title: 'Node.js',
          date: 'nnnnnn',
          image: 'https://code-maven.com/img/node.png'
        },
        {
          title: 'Pusher',
          date: 'ppppppppp',
          image: 'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
        },
        {
          title: 'Feathers.js',
          date: 'fffffffffff',
          image: 'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
        }
      ]
    }
  },
  mounted () {
    // console.log("mounted:");
  },
  methods: {
    ini: function () {
      // console.log();
    }
  },
  computed: {
    items () {
      return this.itemList.filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0;
  .header {
    .headline {
      background-color: #363636;
      align-items: center;
      padding: 0 16px;
      color: #03a9f4 !important;
      caret-color: #03a9f4 !important;

      height: 48px;
      display: flex;
      align-items: center;
      font-family: "Noto Sans Medium", sans-serif !important;
      font-size: 1.5em !important;
      letter-spacing: -1.4px !important;
      font-weight: normal !important;
    }
    .caption {
      text-decoration: underline;
      text-underline-position: under;
      margin-bottom: 0px;
      min-height: 36px;
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
      align-items: center;
      padding: 7px 16px;
    }
  }
  .date {
    font-family: "Noto Sans DemiLight", sans-serif !important;
    font-size: 16px !important;
    letter-spacing: -1.4px !important;
    font-weight: normal !important;
    padding: 10px 16px 16px 16px;
  }
  .v-card__title {
    padding: 0;
  }
  h4.headline {
    display: flex;
    align-items: center;
    font-family: "Noto Sans DemiLight", sans-serif !important;
    font-size: 18px !important;
    letter-spacing: -1.4px !important;
    font-weight: normal !important;
    padding: 16px;
    height: 48px;
    color: #03a9f4 !important;
  }
}

.v-list {
  padding: 0;
}
.v-input {
  background-color: #0277bd;
  margin: 0;
  padding: 16px 16px 0 16px;
  z-index: 10;
}

.v-expansion-panel__header {
  padding: 12px 16px !important;
}
</style>
