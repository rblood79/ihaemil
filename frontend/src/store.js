import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* count: 0,
    isDirect: false,
    isActive: false,
    isTitle: '',
    isTitleSub: '',
    isarticle: '',
    isEvent: '' */
    appName: 'Haemilsoft',
    appBuilder: 'RUNA SERIES <a title="RUNA Report" href="http://runa-r.ihaemil.co.kr" target="_blank">Report</a> / <a title="RUNA Builder">Builder</a> / <a title="RUNA Studio">Studio</a>',
    appBuilderM: 'RUNA SERIES <a title="RUNA Report">Report</a> / <a title="RUNA Builder">Builder</a> / <a title="RUNA Studio">Studio</a>',
    scrollY: 0,
    deltaY: 0,
    inHeight: 0,
    outHeight: 0,
    isMobile: false,
    isMenu: false,
    menus: ['landing', 'survice', 'about', 'support', 'member'],
    itemsColor: [
      '#1e9cd9',
      '#0277bd',
      '#2f5aa8',
      '#363636',
      '#313131'
    ],
    items: [],
    itemsValue: [
      {// landing
        speed: [640, 375, 375, 375],
        width: [1500, 375, 375, 375],
        height: [640, 320, 320, 320],
        x: [0, 375, 750, 1125],
        y: [0, 0, 0, 0],
        z: [0, 0, 0, 0],
        background: [
          '#0277bd',
          '#363636',
          '#2f5aa8',
          '#1e9cd9'
        ],
        delay: [0, 0, 0, 0]
      },
      {// service
        speed: [525, 640, 640, 320],
        width: [375, 750, 188, 375],
        height: [640, 640, 320, 320],
        x: [0, 375, 1125, 1125],
        y: [0, 0, 0, 320],
        z: [0, 0, 0, 0],
        background: [
          '#0277bd',
          '#363636',
          '#2f5aa8',
          '#1e9cd9'
        ],
        delay: [0, 0, 300, 400]
      },
      {// about
        speed: [525, 375, 375, 320],
        width: [1125, 1125, 375, 375],
        height: [320, 320, 320, 160],
        x: [0, 0, 1125, 1125],
        y: [0, 320, 0, 320],
        z: [0, 0, 0, 0],
        background: [
          '#0277bd',
          '#363636',
          '#2f5aa8',
          '#1e9cd9'
        ],
        delay: [0, 0, 300, 400]
      },
      {// support
        speed: [525, 337, 640, 337],
        width: [750, 375, 375, 188],
        height: [640, 640, 320, 320],
        x: [0, 750, 1125, 1125],
        y: [0, 0, 0, 320],
        z: [0, 0, 0, 0],
        background: [
          '#0277bd',
          '#363636',
          '#2f5aa8',
          '#1e9cd9'
        ],
        delay: [0, 0, 300, 400]
      }
    ]
  },
  getters: {
    /* fn_block: (state, getters, rootState) => {
      return state.itemBlock.map(({ id, quantity }) => {
        const product = rootState.products.all.find(product => product.id === id)
        return {
          title: product.title,
          price: product.price,
          quantity
        }
      })
    } */
  },
  mutations: {
    // increment: state => state.isActive = true,
    // decrement: state => state.isActive = false,
    isTest (state, payload) {
      state.isTest = payload.active
    },
    isMobile (state, payload) {
      state.isMobile = payload.active
    },
    items (state, payload) {
      state.items = payload.array
    },
    scrollY (state, payload) {
      state.scrollY = payload.num
    },
    deltaY (state, payload) {
      state.deltaY = payload.num
    },
    inHeight (state, payload) {
      state.inHeight = payload.num
    },
    outHeight (state, payload) {
      state.outHeight = payload.num
    },
    isMenu (state, payload) {
      state.isMenu = payload.active
    }

  },
  actions: {}
})
