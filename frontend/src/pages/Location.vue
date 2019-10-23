<template>
  <v-container fill-height fluid>
    <div class="header">
      <h3 class="headline" v-if="title">{{title}}</h3>
      <h4 class="caption white--text" v-if="titleSub">{{titleSub}}</h4>
    </div>
    <div class="contents">
      <ul class="information" v-if="list">
        <li v-for="item in list" :key="item.idx">{{item.title}}{{item.contents}}</li>
      </ul>
      <div class="mapGroup">
        <div class="map" ref="mapContainer"></div>

      </div>
    </div>
  </v-container>
</template>

<script>
import loadScriptOnce from 'load-script-once'
import config from '../config'
export default {
  // components: { VueDaumMap },
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      title: '내게 오는 길',
      titleSub: '지금 곁에서 딴 생각에 잠겨 걷고 있는 그대',
      article: '',
      list: [
        {
          title: '주소 : ',
          contents: '경남 진주시 범골로 54번길 30-9 드림 IT벨리 B607'
        },
        { title: '일반전화 : ', contents: '055 761 1070' },
        { title: '대표전화 : ', contents: '010 6570 2070' },
        { title: '팩스 : ', contents: '055 752 3070' },
        { title: '사업자등록번호 : ', contents: '613 81 73711' }
      ],

      map: null,
      appKey: config.appKey,
      libraries: [],
      center: { lat: 35.166899, lng: 128.131954 },
      level: 5
    }
  },
  mounted () {
    loadScriptOnce(
      `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${
        this.appKey
      }&libraries=${this.libraries.join(',')}`
    )
      .then(() => {
        daum.maps.load(() => {
          this.render()
          this.bindEvents()
          this.$emit('load', this.map)
        })
      })
      .catch(err => {
        alert(err)
        console.error(err)
      })
  },
  methods: {
    /* "ROADMAP": 1,
    "NORMAL": 1,
    "SKYVIEW": 2,
    "HYBRID": 3,
    "OVERLAY": 4,
    "ROADVIEW": 5,
    "TRAFFIC": 6,
    "TERRAIN": 7,
    "BICYCLE": 8,
    "BICYCLE_HYBRID": 9,
    "USE_DISTRICT": 10 */
    init () {},
    render () {
      const currentTypeId = ''
      const mapPosition = new kakao.maps.LatLng(
        this.center.lat,
        this.center.lng
      )
      const markers = [
        {
          position: mapPosition
        },
        {
          position: mapPosition,
          text: '(주)해밀소프트'
        }
      ]
      const options = {
        center: mapPosition,
        level: this.level,
        marker: markers
        // mapTypeId: kakao.maps.MapTypeId.TRAFFIC
        // draggable: false
      }
      // this.map = new kakao.maps.StaticMap(this.$refs["mapContainer"], options);

      this.map = new kakao.maps.Map(this.$refs['mapContainer'], options)
      // this.map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

      const imageSrc = require('../assets/images/marker_red.png')
      const imageSize = new kakao.maps.Size(64, 69)
      const imageOption = { offset: new kakao.maps.Point(27, 69) }

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      )

      var marker = new kakao.maps.Marker({
        position: mapPosition,
        image: markerImage
      })

      marker.setMap(this.map)

      // this.map.removeOverlayMapTypeId(currentTypeId);
    },
    bindEvents () {},
    bindEvent () {}
  }
}
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  margin-bottom: 24px;
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    /*font-family: "Noto Sans Medium";*/
    color: #fff !important;
    padding: 4px 4px 4px 0;

    &::after {
      content: "+";
      width: 22px;
      display: inline-block;
      font-family: "Noto Sans DemiLight";
      text-align: center;
      color: rgba(0, 0, 0, 0.7);
    }

    &:last-child {
      &::after {
        content: "";
        width: 0;
      }
    }
  }
}
.headline {
  color: #fff;
}
.information {
  font-family: "Noto Sans DemiLight", sans-serif !important;
  color: #fff;
  flex: 0 1 auto;
}
.mapGroup {
  flex: 1 1 auto;
  width: 100%;
  background-color: #f2f0e8;
  .map {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 750px) {
  ul {
    margin-top: 0;
    li {
      &:after {
        content: "";
        width: 0px;
      }
    }
    li:nth-child(even) {
      padding-right: 16px;
    }
  }
}
</style>
